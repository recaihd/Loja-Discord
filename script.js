    const popup = document.getElementById('popupBox');
  const popupTitle = document.getElementById('popupTitle');
  const popupPrice = document.getElementById('popupPrice');
  const popupBenefits = document.querySelector('.popup-benefits');

 
  const produtos = {
    "Fã do max": {
      descricao: "Apoie o <strong>max</strong> financeiramente!",
      beneficios: ["✅ Todos os benefícios do cargo VIP <strong>ETERNO!</strong>", "✅ Agradecimento especial do Max", "✅ Cargo personalizado"],
    },
     "Fã do malf": {
      descricao: "Apoie o <strong>max</strong> financeiramente!",
      beneficios: ["✅ Todos os benefícios do cargo VIP <strong>ETERNO!</strong>", "✅ Agradecimento especial do Malf", "✅ Cargo personalizado"],
    },
    "Fã do recai": {
      descricao: "Apoie o <strong>recai</strong> financeiramente!",
      beneficios: ["✅ Todos os benefícios do cargo VIP <strong>ETERNO!</strong>", "✅ Agradecimento especial do recai", "✅ Cargo personalizado", "✅ Aulas de HTML + CSS"],
    },
    "Fã do ter3cotec0": {
      descricao: "Apoie o <strong>ter3cotec0</strong> financeiramente!",
      beneficios: ["✅ Todos os benefícios do cargo VIP <strong>ETERNO!</strong>", "✅ Agradecimento especial do teo", "✅ Cargo personalizado", "✅ Perde o family friend e pode xingar no chat sem perigo do automod", "✅ com limites claro...", "✅ Cor do cargo personalizada"],
    },
    "Super Fã do malf": {
      descricao: "Apoie o <strong>malf</strong> financeiramente!",
      beneficios: ["✅ Todos os beneficios do Fã padrão", "✅ 5 de xp ao falar no chat"]
    },
    "Super Fã do max": {
      descricao: "Apoie o <strong>max</strong> financeiramente!",
      beneficios: ["✅ Todos os beneficios do Fã padrão", "✅ 5 de xp ao falar no chat"]
    },
    "Super Fã do recai": {
      descricao: "Apoie o <strong>recai</strong> financeiramente!",
      beneficios: ["✅ Todos os beneficios do Fã padrão", "✅ 5 de xp ao falar no chat"]
    },
    "Super Fã do ter3cotec0": {
      descricao: "Apoie o <strong>ter3cotec0</strong> financeiramente!",
      beneficios: ["✅ Todos os beneficios do Fã padrão", "✅ 5 de xp ao falar no chat"]
    },
    "Tranque o chat": {
        descricao: "Tranque o chat-geral por 1 hora!",
        beneficios: ["Aparece que você trancou (caso queira)"],
    },
    "Mute um membro": {
        descricao: "Mute qualquer membro do servidor por 1 dia!",
        beneficios: ["não incluí staffers"],
    },
    "Demote um ADM": {
        descricao: "Tire um adm do cargo por 1 dia!",
        beneficios: ["Válido para:", "AJUDANTE", "MODERADOR", "SUPERVISOR", "ADMINISTRADOR"],
    },
    "Expulse um membro": {
        descricao: "Expulse um membro do servidor",
        beneficios: ["Lembrando que uma expulsão", "não um banimento!", "Não incluí staffers"],
    },
    "Add emoji": {
        descricao: "Adicione um emoji no servidor",
        beneficios: ["Não pode ser +18", "Não pode ser n4z1sta", "Não pode ser de pedof1l14", "Não pode ser de apostas", "Não pode ser de nenhum crime"],
    },
    "Cargo VIP": {
        descricao: "Tenha um cargo VIP por <strong>1 mês!</strong>",
        beneficios: ["✅ 2x entradas em sorteios", "✅ Acesso á call VIP", "✅ Permissão para enviar imagens em canais bloqueados", "✅ Acesso ao servidor secreto", "✅ Acesso ao superchat"],
    },
    "Doação": {
        descricao: "Doe para o servidor ❤️",
        beneficios: ["✅ Cargo de Doador"],
    },
    "Divulgação": {
        descricao: "Divulgue seu projeto no servidor",
        beneficios: ["✅ Divulgação com @everyone", "❌ Mais de uma vez", "Não pode ser n4z1sta", "Não pode ser de apostas", "Não pode ser de pedof1l14", "Não pode ser de nenhum crime"],
    },
    "Criar cargo": {
        descricao: "Crie um cargo personalizado, e tenha ele por <strong>1 mês</strong> ,só seu!",
        beneficios: ["✅ Aparece na lista do servidor", "❌ Compartilhar com outro membros", "❌ Possuí béneficios vips", "❌ Possuí poderes administrativos", "❌ Pode ser n4z1sta", "❌ Pode ser de apostas", "❌ Pode ser de pedof1l14", "não pode ser de nenhum crime"],
    },
    "Mensagem Anônima": {
        descricao: "Mande uma mensagem anônima no servidor",
        beneficios: ["❌ Mais de uma vez"],
    },
    "Parceria": {
        descricao: "Tenha uma parceria com o nosso servidor",
        beneficios: ["Divulgação com @everyone", "Cargo de parceiro", "Pode divulgar o projeto no chat", "Mais de uma vez", "Sem everyone no chat"],
    },
    "Add Figurinha": {
        descricao: "Envie uma figurinha no servidor",
        beneficios: ["Não pode ser +18", "Não pode ser n4z1st4", "Não pode ser de apostas", "Não pode ser de pedof1l1a", "Não pode ser de nenhum crime"],
    },

  };

  function showPopup(title, price) {
    popupTitle.textContent = `1x ${title}`;
    popupPrice.textContent = `Total: ${price}`;

    const item = produtos[title];

    if (item) {
      popupBenefits.innerHTML = `
        <strong>Vantagens</strong>
        <p>${item.descricao}</p>
        <ul>
          ${item.beneficios.map(ben => `<li>${ben}</li>`).join('')}
        </ul>
      `;
    } else {
      popupBenefits.innerHTML = `
        <strong>Vantagens</strong>
        <p>Sem informações cadastradas.</p>
      `;
    }

    popup.style.display = 'flex';
  }

  function closePopup() {
    popup.style.display = 'none';
  }

  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
      const title = card.querySelector('.card-title').textContent;
      const price = card.querySelector('.card-price').textContent;
      showPopup(title, price);
    });
  });