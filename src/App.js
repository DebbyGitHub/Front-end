import logo from './logo.svg';
import './css/main.css';

function App() {
  return (
    <div>
    <link rel="stylesheet" href="/food/css/main.css" />

    <div className="hero-bg">
    <section className="top">
      <header>
        <a href="#">DNAcode</a>
      </header>
      <h1>
        Using your unique DNA<span> to encrypt any message</span>
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
        exercitationem iure iusto aperiam similique quidem praesentium, optio
        aspernatur voluptates accusantium.
      </p>
    </section>
  </div>
  <div className="form-container">
    <section>
      <h2>Encryption </h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
        exercitationem iure iusto aperiam similique quidem praesentium, optio
        aspernatur voluptates accusantium.
      </p>
      <img src="/images/lock-1.jpg" alt="Picture of a locked padlock" />
      <form action>
        <label htmlFor="genetic_data">Upload your genetic data:</label>
        <input type="file" name="genetic_data" id="genetic_data" />
        <p>Please upload .fasta files only for your genetic data </p>
        <label htmlFor="hidden_data">Upload your secret message:</label>
        <input type="file" name="hidden_data" id="hidden_data" />
        <br /> <br />
        <label htmlFor="text_key">Write your key:</label>
        <input type="text" name="text_key" id="tex_key" />
        <br />
        <br />
        <input type="button" defaultValue="Encrypt data" />
      </form>
      <br />
      <br />
      <h2>Decryption </h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
        exercitationem iure iusto aperiam similique quidem praesentium, optio
        aspernatur voluptates accusantium.
      </p>
      <img src="images/decrypt-lock.jpg" alt="Picture of an unlocked padlock" />
      <form action>
        <div className="form-left">
          <label htmlFor="encrypted_data">Upload your encrypted data:</label>
          <input type="file" name="encrypted_data" id="encrypted_data" />
          <br />
          <br />
          <label htmlFor="text_key">Write your key:</label>
          <input type="text" name="text_key" id="tex_key" />
        </div>
        <br />
        <input type="button" defaultValue="Decrypt data" />
      </form>
    </section>
  </div>
  </div>

  
      );
}

export default App;
