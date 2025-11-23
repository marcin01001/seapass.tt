Documentação do SeaPass
1. Tecnologias Utilizadas
O SeaPass foi desenvolvido utilizando HTML, CSS e JavaScript.
A aplicação segue uma estrutura modular, na qual cada página possui seus próprios arquivos de estilo e
comportamento, mantendo organização e facilidade de manutenção.
O sistema também utiliza dois arquivos globais: um CSS dedicado ao tema escuro e um JavaScript
responsável pela ativação do modo noturno. Esses arquivos são importados em todas as telas, garantindo
consistência visual e funcionamento uniforme do recurso em toda a aplicação.
2. Estrutura das Telas
2.1 Tela de Login e Cadastro
Essa tela permite que o usuário acesse sua conta no SeaPass ou crie um novo registro. Ela apresenta campos
para inserção de e-mail, senha e botões de confirmação.
Para novos usuários, há um direcionamento para a área de cadastro, mantendo a mesma identidade visual.
É a primeira etapa de interação com o sistema e controla o acesso às demais funcionalidades.
2.2 Tela Inicial (Home)
A tela inicial funciona como o ponto de entrada principal após o login.
Na imagem enviada, a interface apresenta um cabeçalho com a identidade visual do SeaPass e elementos
organizados que servem como navegação central do sistema.
Essa página é responsável por conduzir o usuário às principais funcionalidades, como pesquisa de hotéis,
visualização de estabelecimentos em destaque e acesso aos detalhes de cada opção disponível.
2.3 Tela de Detalhes do Hotel
A tela de detalhes apresenta as informações completas sobre um hotel selecionado.
Nas imagens fornecidas, a estrutura é composta por:
• Imagem principal do hotel ocupando a seção superior.
• Apresentação do nome do hotel.
• Informações gerais e endereço.
• Seção de comodidades, exibindo itens como academia, Wi-Fi e outras facilidades.
• Painel lateral ou botão de ação para avançar com a reserva.
Essa tela serve como base para a tomada de decisão do usuário antes da seleção do tipo de
quarto.
2.4 Tela de Reserva
A tela de reserva possui a imagem principal do hotel na parte superior e, na área inferior, os detalhes das
avaliações, nota geral, comentários e informações relevantes para a escolha final.
A página oferece três opções de quarto: básico, intermediário e superior, cada uma com valores e
características distintas.
O usuário seleciona sua opção, ajusta datas e hóspedes e segue para a confirmação.
2.5 Tela de Reserva Concluída
Após finalizar o processo, o usuário é direcionado para a tela de confirmação da reserva.
Essa página apresenta um resumo das informações escolhidas e confirma que o procedimento foi registrado
com sucesso.
2.6 Tela de Configurações
A tela de configurações reúne as opções de personalização do SeaPass, incluindo a alternância entre modo
claro e modo noturno e o tamanho da fonte.
A implementação utiliza arquivos globais de CSS e JavaScript dedicados ao tema escuro, garantindo que a
interface seja atualizada imediatamente ao acionar a função.
3. Melhorias Implementadas na Nova Versão do SeaPass
A nova versão do SeaPass apresenta uma série de aprimoramentos importantes em relação à versão anterior,
com foco em usabilidade, clareza do fluxo e experiência do usuário. As principais melhorias incluem:
3.1 Reestruturação Completa da Interface
A organização visual das telas foi redesenhada para proporcionar maior equilíbrio entre estética e
funcionalidade. A navegação tornou-se mais intuitiva, com elementos padronizados e disposição mais clara
das informações.
3.2 Inclusão da Tela de Detalhes do Hotel
Antes, o usuário não tinha acesso a uma apresentação aprofundada do hotel. A nova tela oferece imagens em
destaque, descrição detalhada, comodidades e avaliações, permitindo uma análise mais precisa antes da
reserva.
3.3 Novo Sistema de Reserva
O processo de reserva foi segmentado em etapas claras, incluindo escolha do tipo de quarto e revisão final.
Isso evita dúvidas e traz maior transparência ao procedimento.
3.4 Tela de Confirmação Estruturada
A nova tela dedicada à confirmação traz clareza ao fechamento da reserva, eliminando a insegurança presente
na versão anterior.
3.5 Implementação do Modo Noturno
A aplicação ganhou um tema escuro acessível pela tela de configurações. A adaptação foi planejada para
manter consistência visual em todas as interfaces.
