const app = require("../app");
const fs = require('fs');
const path = require('path');
const HTTPS = require('https');

const domain = "2020105595.osschatbot.ga"
const PORT= process.env.PORT || 3000;

app.listen(PORT, function () {
  console.log('서버 가동', PORT);
});

/* try {
    const option = {
      ca: fs.readFileSync('/etc/letsencrypt/live/' + domain +'/fullchain.pem'),
      key: fs.readFileSync(path.resolve(process.cwd(), '/etc/letsencrypt/live/' + domain +'/privkey.pem'), 'utf8').toString(),
      cert: fs.readFileSync(path.resolve(process.cwd(), '/etc/letsencrypt/live/' + domain +'/cert.pem'), 'utf8').toString(),
    };
  
    HTTPS.createServer(option, app).listen(PORT, () => {
      console.log(`[HTTPS] Server is started on port ${PORT}`);
    });
  } catch (error) {
    console.log('[HTTPS] HTTPS 오류가 발생하였습니다. HTTPS 서버는 실행되지 않습니다.');
    console.log(error);
  } */