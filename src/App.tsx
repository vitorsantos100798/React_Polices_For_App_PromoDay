import "./App.css";
function App() {
  const icon = require("../src/assets/icon.png");
  return (
    <div className="App">
      <h1>Política de Privacidade do Promo Day</h1>
      <div className="container">
        <img src={icon} alt="Minha Figura" />
      </div>
      <p>
        O Promo Day é um aplicativo móvel que permite aos usuários compartilhar
        promoções encontradas em lojas locais em um feed de promoções. Nossa
        política de privacidade é destinada a ajudar os usuários a entender como
        coletamos, usamos e protegemos as informações pessoais fornecidas por
        eles durante o uso do nosso aplicativo.
      </p>

      <h2>1. Coleta de informações pessoais</h2>
      <p>
        Para utilizar o Promo Day, os usuários precisam criar uma conta,
        fornecendo informações pessoais, como nome, endereço de e-mail e senha.
        Também coletamos informações de localização quando o usuário permite o
        acesso à sua localização. Além disso, as promoções compartilhadas pelos
        usuários podem conter informações pessoais, como preços e fotos.
      </p>

      <h2>2. Uso de informações pessoais</h2>
      <p>
        As informações pessoais dos usuários são coletadas e usadas para os
        seguintes fins:
      </p>
      <ul>
        <li>Gerenciar a conta do usuário e permitir o acesso ao aplicativo;</li>
        <li>Fornecer ao usuário promoções próximas à sua localização;</li>
        <li>Compartilhar promoções com outros usuários do aplicativo;</li>
        <li>Melhorar e personalizar a experiência do usuário;</li>
        <li>
          Comunicar-se com os usuários sobre o uso do aplicativo, promoções e
          outras informações relevantes;
        </li>
        <li>
          Enviar notificações push para o usuário sobre promoções próximas.
        </li>
      </ul>

      <h2>3. Compartilhamento de informações pessoais</h2>
      <p>
        O Promo Day não compartilha informações pessoais dos usuários com
        terceiros, exceto nas seguintes circunstâncias:
      </p>
      <ul>
        <li>
          Quando o usuário opta por compartilhar uma promoção com outros
          usuários do aplicativo ou por meio de aplicativos de mensagens;
        </li>
        <li>
          Quando exigido por lei ou para proteger os direitos, propriedade ou
          segurança do Promo Day ou de outros usuários.
        </li>
      </ul>

      <h2>4. Segurança de informações pessoais</h2>
      <p>
        O Promo Day emprega medidas de segurança adequadas para proteger as
        informações pessoais dos usuários, incluindo o uso de criptografia de
        dados durante a transmissão e armazenamento seguro de dados.
      </p>

      <h2>5. Mudanças nesta Política de Privacidade</h2>
      <p>
        O Promo Day reserva-se o direito de modificar esta política de
        privacidade a qualquer momento. As alterações serão publicadas no
        aplicativo e, se forem significativas, os usuários serão notificados por
        e-mail.
      </p>

      <h2>6. Contato</h2>
      <p>
        Se você tiver alguma dúvida ou preocupação sobre a nossa política de
        privacidade, entre em contato conosco por meio do e-mail:
        promoday@app.com
      </p>
      <p>
        <strong className="Text">
          Ao usar o Promo Day, os usuários concordam com esta política de
          privacidade e consentem com a coleta, uso e compartilhamento de suas
          informações pessoais, conforme descrito nesta política.
        </strong>
      </p>
    </div>
  );
}

export default App;
