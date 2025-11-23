// login.js - Integrado com Backend
const API_BASE = 'http://localhost:4000/api';

// Função para fazer login no backend
async function fazerLoginBackend(dadosLogin) {
    try {
        console.log('📤 Enviando dados de login para o backend:', dadosLogin);
        
        const response = await fetch(`${API_BASE}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dadosLogin)
        });

        const data = await response.json();
        
        if (response.ok) {
            return { success: true, data };
        } else {
            return { success: false, error: data.erro };
        }
    } catch (error) {
        console.error(' Erro na requisição:', error);
        return { success: false, error: 'Erro de conexão com o servidor.' };
    }
}

// Função para testar conexão com a API
async function testarConexaoAPI() {
    try {
        const response = await fetch(`${API_BASE}/health`);
        if (response.ok) {
            const data = await response.json();
            console.log(' API conectada com sucesso!', data);
            return true;
        } else {
            console.warn(' API retornou status:', response.status);
            return false;
        }
    } catch (error) {
        console.error(' Não foi possível conectar com a API:', error);
        console.log('💡 Dica: Verifique se o backend está rodando na porta 4000');
        return false;
    }
}

// Função para alternar a visibilidade da senha
function toggleSenha(inputId) {
    const input = document.getElementById(inputId);
    const toggle = document.querySelector(`[data-target="${inputId}"]`);

    if (input.type === 'password') {
        input.type = 'text';
        toggle.textContent = '🙈';
    } else {
        input.type = 'password';
        toggle.textContent = '👁️';
    }
}

// Mostrar mensagem de erro
function mostrarErro(campoId, mensagem) {
    const erroElement = document.getElementById(campoId);
    erroElement.textContent = mensagem;
    erroElement.style.display = 'block';
}

// Esconder mensagem de erro
function esconderErro(campoId) {
    const erroElement = document.getElementById(campoId);
    erroElement.style.display = 'none';
}

// Mostrar mensagem de sucesso
function mostrarSucesso(mensagem) {
    const successElement = document.getElementById('success-message');
    successElement.textContent = mensagem;
    successElement.style.display = 'block';
}

// Esconder mensagem de sucesso
function esconderSucesso() {
    const successElement = document.getElementById('success-message');
    successElement.style.display = 'none';
}

// Mostrar loading no botão
function mostrarLoading() {
    const btn = document.querySelector('.btn-login');
    const originalText = btn.textContent;
    
    btn.disabled = true;
    btn.innerHTML = '<div class="btn-loading" style="display: flex; align-items: center; justify-content: center; gap: 8px;"><div class="spinner" style="width: 16px; height: 16px; border: 2px solid #ffffff33; border-radius: 50%; border-top: 2px solid white; animation: spin 1s linear infinite;"></div> Entrando...</div>';
}


// Esconder loading no botão
function esconderLoading() {
    const btn = document.querySelector('.btn-login');
    btn.disabled = false;
    btn.textContent = 'Entrar';
}

// Validar email
function validarEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Adicionar event listeners quando o DOM carregar
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Página de login carregada');
    
    // Testar conexão com API
    testarConexaoAPI().then(conectado => {
        if (!conectado) {
            console.log('🔧 Backend não conectado - usando modo offline');
        }
    });

    // Event listeners para os toggles de senha
    const toggles = document.querySelectorAll('.toggleSenha');
    
    toggles.forEach(toggle => {
        toggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const targetId = this.getAttribute('data-target');
            toggleSenha(targetId);
        });
    });

    // Validação em tempo real do email
    document.getElementById('email').addEventListener('blur', function(e) {
        if (this.value && !validarEmail(this.value)) {
            mostrarErro('email-error', 'Por favor, insira um e-mail válido');
        } else {
            esconderErro('email-error');
        }
    });

    // Validação em tempo real da senha
    document.getElementById('senha').addEventListener('blur', function(e) {
        if (this.value && this.value.length === 0) {
            mostrarErro('senha-error', 'Por favor, insira sua senha');
        } else {
            esconderErro('senha-error');
        }
    });

    // Submissão do formulário de login
    document.getElementById('formLogin').addEventListener('submit', async function(e) {
        e.preventDefault();
        
        console.log('📝 Iniciando processo de login...');
        
        // Resetar mensagens
        esconderSucesso();
        const errorMessages = document.querySelectorAll('.error-message');
        errorMessages.forEach(msg => {
            msg.style.display = 'none';
        });
        
        let isValid = true;
        
        // Validação do email
        const email = document.getElementById('email').value;
        if (!email || !validarEmail(email)) {
            mostrarErro('email-error', 'Por favor, insira um e-mail válido');
            isValid = false;
        }
        
        // Validação da senha
        const senha = document.getElementById('senha').value;
        if (!senha || senha.length === 0) {
            mostrarErro('senha-error', 'Por favor, insira sua senha');
            isValid = false;
        }
        
        if (!isValid) {
            console.log('❌ Validação local falhou');
            return;
        }
        
        // Coletar dados do formulário
        const dadosLogin = {
            email: email,
            senha: senha
        };
        
        console.log('📋 Dados de login:', dadosLogin);
        
        // Mostrar loading
        mostrarLoading();
        console.log('🔄 Enviando dados para o backend...');
        
        try {
            // Fazer requisição para o backend
            const resultado = await fazerLoginBackend(dadosLogin);
            
            if (resultado.success) {
                console.log('✅ Login realizado com sucesso:', resultado.data);
                mostrarSucesso('Login realizado com sucesso! Redirecionando...');
                
                // Salvar token ou dados do usuário se necessário
                if (resultado.data.token) {
                    localStorage.setItem('token', resultado.data.token);
                    localStorage.setItem('usuario', JSON.stringify(resultado.data.usuario));
                }
                
                // Redirecionar para telainicial.html após 2 segundos
                setTimeout(() => {
                    window.location.href = 'telainicial.html';
                }, 2000);
                
            } else {
                console.log('❌ Erro no backend:', resultado.error);
                
                // Mostrar erro do backend
                let mensagemErro = resultado.error || 'Erro ao realizar login';
                
                // Mapear erros específicos
                if (mensagemErro.includes('Credenciais inválidas') || 
                    mensagemErro.includes('Email ou senha incorretos') ||
                    mensagemErro.includes('Usuário não encontrado')) {
                    mostrarErro('email-error', 'E-mail ou senha incorretos');
                    mostrarErro('senha-error', 'E-mail ou senha incorretos');
                } else if (mensagemErro.includes('conexão') || 
                          mensagemErro.includes('servidor') ||
                          mensagemErro.includes('timeout')) {
                    // Erro de conexão - mostrar alerta
                    alert('❌ Erro de conexão: ' + mensagemErro + '');
                } else {
                    // Erro genérico - mostrar alerta
                    alert('❌ Erro no login: ' + mensagemErro);
                }
            }
            
        } catch (error) {
            console.error('❌ Erro no login:', error);
            
            // Mostrar mensagem de erro de conexão
            alert('❌ Erro de conexão com o servidor.\n\nVerifique se:\n• O backend está rodando na porta 4000\n• Execute: python main.py\n\nErro técnico: ' + error.message);
            
        } finally {
            // Esconder loading
            esconderLoading();
        }
    });

    // Event listeners para login social
    document.querySelector('.social-btn.facebook').addEventListener('click', function() {
        alert('Login com Facebook selecionado - funcionalidade em desenvolvimento');
        // Implementar lógica de login com Facebook
    });

    document.querySelector('.social-btn.google').addEventListener('click', function() {
        alert('Login com Google selecionado - funcionalidade em desenvolvimento');
        // Implementar lógica de login com Google
    });

    document.querySelector('.social-btn.apple').addEventListener('click', function() {
        alert('Login com Apple selecionado - funcionalidade em desenvolvimento');
        // Implementar lógica de login com Apple
    });

    // Link "Esqueci a senha"
    document.querySelector('.esqueci-senha').addEventListener('click', function(e) {
        e.preventDefault();
        const email = document.getElementById('email').value;
        
        if (email && validarEmail(email)) {
            alert(`📧 Enviando recuperação para: ${email}\n\nFuncionalidade em desenvolvimento`);
        } else {
            alert('Por favor, insira seu e-mail para recuperação de senha');
        }
        // Implementar lógica de recuperação de senha
    });
});

// Adicione este CSS para melhor visualização no console e animações
const style = document.createElement('style');
style.textContent = `
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
    
    .console-info {
        background: #3b82f6;
        color: white;
        padding: 5px 10px;
        border-radius: 4px;
        margin: 2px 0;
    }
    .console-success {
        background: #10b981;
        color: white;
        padding: 5px 10px;
        border-radius: 4px;
        margin: 2px 0;
    }
    .console-error {
        background: #ef4444;
        color: white;
        padding: 5px 10px;
        border-radius: 4px;
        margin: 2px 0;
    }
    
    .btn-loading {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
    }
    
    .spinner {
        width: 16px;
        height: 16px;
        border: 2px solid #ffffff33;
        border-radius: 50%;
        border-top: 2px solid white;
        animation: spin 1s linear infinite;
    }
`;
document.head.appendChild(style);