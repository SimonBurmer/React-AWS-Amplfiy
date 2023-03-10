import React, { useState } from 'react';
import './App.css';
import { Jose } from 'jose-jwe-jws';

function App() {
  const [showString, setShowString] = useState("hello world");

  const handleClick = async () => {
    var cryptographer = new Jose.WebCryptographer();
    var rsa_key = Jose.Utils.importRsaPublicKey(
      {
        n:
          "c2:4b:af:0f:2d:2b:ad:36:72:a7:91:0f:ee:30:a0:95:d5:3a:46:82:86:96:7e:42:c6:fe:8f:20:97:af:49:f6:48:a3:91:53:ac:2e:e6:ec:9a:9a:e0:0a:fb:1c:db:44:40:5b:8c:fc:d5:1c:cb:b6:9b:60:c0:a8:ac:06:f1:6b:29:5e:2f:7b:09:d9:93:32:da:3f:db:53:9c:2e:ea:3b:41:7f:6b:c9:7b:88:9f:2e:c5:dd:42:1e:7f:8f:04:f6:60:3c:fe:43:6d:32:10:ce:8d:99:cb:76:f7:10:97:05:af:28:1e:39:0f:78:35:50:7b:8e:28:22:a4:7d:11:51:22:d1:0e:ab:6b:6f:96:cb:cf:7d:eb:c6:aa:a2:6a:2e:97:2a:93:af:a5:89:e6:c8:bc:9f:fd:85:2b:0f:b4:c0:e4:ca:b5:a7:9a:01:05:81:93:6b:f5:8d:1c:f7:f3:77:0e:6e:53:34:92:0f:48:21:34:33:44:14:5e:4a:00:41:3a:7d:cb:38:82:c1:65:e0:79:ea:a1:05:84:b2:6e:40:19:77:1a:0e:38:4b:28:1f:34:b5:cb:ac:c5:2f:58:51:d7:ec:a8:08:0e:7c:c0:20:c1:5e:a1:4d:b1:30:17:63:0e:e7:58:8e:7f:6e:9f:a4:77:8b:1e:a2:d2:2e:1b:e9",
        e: 65537
      },
      "RSA-OAEP"
    );
    var encrypter = new Jose.JoseJWE.Encrypter(cryptographer, rsa_key);
    encrypter
      .encrypt(showString)
      .then(function (result) {
        console.log(`encrypted pw: ${result}`);
        setShowString(result)
      })
      .catch(function (err) {
        console.error(err);
      });
  };


  return (
    <div className="App">

      <div>
        <button onClick={handleClick}>Encript</button>
        <p>{showString}</p>
      </div>

    </div>
  );
}

export default App;


