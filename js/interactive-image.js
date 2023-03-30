var items = [
    {
      type: "text",
      title: "Tricórnio",
      description: "Chapéu com três bicos de veludo preto, podendo ser de arame ou cartão",
      position: {
        left: 70,
        top: 10
      } 
    },
    {
      type: "text",
      title: "Capa",
      description: "Capa de tecido preto com uma fivela.",
      position: {
        left: 115,
        top: 200
      },
      // customClassName: "custom-text"
    },
    {
      type: "text",
      title: "Casaco",
      description: "Casaco preto, de golas largas, com abertura frontal (com cinco botões), dois bolsos metidos com pala na parte frontal (com quatro botões), mangas com punho dobrado (com três botões). Todos os botões são pretos.",
      position: {
        left: 45,
        top: 130
      } 
    },
    {
      type: "text",
      title: "Camisa",
      description: "Camisa branca de gola alta com dois botões de cada lado e mangas de punho comprido, com quatro botões. Esta possui uma abertura na parte de trás com botões, sendo eles todos brancos e forrados.",
      position: {
        left: 70,
        top: 80
      } 
    },
    {
      type: "text",
      title: "Bermudas",
      description: "Bermudas pretas com bolsos metidos, a apertar com fecho e botão forrado; pernas com uma tira a apertar de lado com botão.",
      position: {
        left: 45,
        top: 250
      } 
    },
    {
      type: "text",
      title: "Meias",
      description: "Meias pretas e opacas, pelo joelho.",
      position: {
        left: 45,
        top: 310
      } 
    },
    {
      type: "text",
      title: "Saia",
      description: "Saia preta, aberta a trás, na parte superior com fecho e botão; na parte de trás três botões forrados.",
      position: {
        left: 240,
        top: 250
      } 
    },
    {
      type: "text",
      title: "Meias de Vidro",
      description: "Meias de vidro, finas (não opacas) e lisas.",
      position: {
        left: 240,
        top: 310
      } 
    },
    {
      type: "text",
      title: "Sapatos",
      description: "Sapatos pretos de couro lisos e de fivela.",
      position: {
        left: 40,
        top: 360
      } 
    },
    {
      type: "text",
      title: "Sapatos",
      description: "Sapatos pretos de couro lisos, com frente arrendondada ou quadrada e com um tacão largo, de três a cinco centímetros de altura.",
      position: {
        left: 240,
        top: 360
      } 
    },

  ];
  
  var options = {
    allowHtml: true,
    shareBox: false,
    triggerEvent: 'hover' 
  };
  
  $(document).ready(function() {
    $("#my-interactive-image").interactiveImage(items, options);
  });