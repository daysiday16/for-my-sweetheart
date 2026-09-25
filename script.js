let currentPaddingX = 25;
let currentPaddingY = 12;
let currentFontSize = 18;
let clickCount = 0; 

const stickers = [
  "https://media1.tenor.com/m/3dcu4xVqws4AAAAd/sad-cat.gif",
  "https://media1.tenor.com/m/e_J2MzCNZXAAAAAd/cat-sulk-cat-sad.gif",
  "https://media1.tenor.com/m/XPT5nUEaYzcAAAAC/standing-kitty.gif",
  "https://media1.tenor.com/m/I6WG5aQzlWcAAAAC/very-sad-cat-sad-cat.gif",
  "https://media1.tenor.com/m/Eq-EesFoZuEAAAAd/distressed-cat.gif",
  "https://media1.tenor.com/m/Hj--Fvv0Dm8AAAAC/cat-cat-meme.gif",
  "https://media1.tenor.com/m/huTBmDxg7bcAAAAd/lollipop-silly.gif",
  "https://media1.tenor.com/m/NjF-4LBl_SsAAAAd/cat-sad.gif",
  "https://media1.tenor.com/m/_wJxx_g651MAAAAd/sad-cat-cat-sad.gif",
  "https://media1.tenor.com/m/j4tOYhRl6bEAAAAC/cat-washing.gif"
];

const texts = [
  "โอ๋ ๆ คุยกันหน่อยน้า หนูคิดถึงพี่จริง ๆ 🥺",
  "อย่าเพิ่งทิ้งหนูววว หนูวมาง้อบิบี๋ 😭",
  "หนูผิดไปแล้วจริงๆ🙏❤️",
  "ถ้ายังไม่กด 'ก็ได้' หนูจะร้องไห้โชว์ตรงนี้จริง ๆ ด้วย! 🥺👉👈",
  "ยัง.. ยังไม่กดอีก 💨",
  "ตื๊อเท่านั้นที่ครองโลก🥺",
  "กด 'ไม่' มา 7 ครั้งแล้วนะ บิบี๋จ๋าาาาา",
  "พี่จ๋าาา หนูยอมแล้วค้าบบ ยอมทุกอย่างเลย ดีกันนะ ๆๆๆ 🥺✨",
  "นิ้วไม่ยอมหยุดกดเลยนะ! ยอมใจอ่อนให้หนูเถอะะะ 😭💕",
  "กดครั้งสุดท้ายแล้วนะ! ถ้ากด 'ไม่' อีกที ปุ่มจะหายแล้วนะที่รัก 😤"
];

function clickBtnNo() {
  const yesBtn = document.getElementById('yesBtn');
  const noBtn = document.getElementById('noBtn');
  const gifImage = document.getElementById('gifImage');
  const messageText = document.getElementById('messageText');
  
  if (clickCount < texts.length) {
    gifImage.src = stickers[clickCount];
    messageText.innerHTML = texts[clickCount];
    messageText.style.display = "block";
    clickCount++;
  } else {
    noBtn.style.display = "none";
    messageText.innerHTML = "กดครบ 10 ครั้งแล้ว! บังคับดีกันฉ่ำ ๆ จิ้ม 'ก็ได้' เท่านั้นนน! 😤❤️";
  }
  
  currentPaddingX += 12;
  currentPaddingY += 6;
  currentFontSize += 4;
  
  yesBtn.style.padding = `${currentPaddingY}px ${currentPaddingX}px`;
  yesBtn.style.fontSize = `${currentFontSize}px`;
}

function confettiEffect() {
  const gifImage = document.getElementById('gifImage');
  const heading = document.querySelector('h1');
  const messageText = document.getElementById('messageText');
  const btnGroup = document.querySelector('.btn-group');
  
  // 1. เปลี่ยนเป็นสติกเกอร์หมีกอดกัน/หมีรักกันสุดน่ารัก
  gifImage.src = "https://media1.tenor.com/m/IVTAsw0-CHcAAAAd/cat-cat-kiss.gif";
  
  // 2. เปลี่ยนหัวข้อใหญ่
  heading.innerHTML = "เย้! จ๋องสวัสดีค้าบ จ๋องมาง้อบิบี๋🥰❤️";
  
  // 3. ซ่อนปุ่มทั้งหมดไปเพื่อแสดงข้อความขอโทษยาว ๆ แทน
  btnGroup.style.display = "none";
  
  // 4. แสดงข้อความขอโทษยาว ๆ (แก้ไขคำพูดตรงนี้ได้ตามต้องการเลยนะครับ)
  messageText.style.display = "block";
  messageText.style.color = "#444444"; // เปลี่ยนสีตัวอักษรให้อ่านง่ายขึ้น
  messageText.style.fontWeight = "normal";
  messageText.innerHTML = "หนูขอโทษบะบี๋จริงๆ แต่บะบี๋อย่าบล็อคหนูเลยนะ อยากคุยด้วยกับพี่จ๋าที่สุด หนูทำพลาดไปแล้วไม่ได้ตั้งใจทำพี่หงุดหงิด หนุไม่ได้ตั้งให้มันเป็นแบบนั้นเลยที่รัก หนูยอมรับว่าหนูผิดเอาแต่คิดถึงสิ่งที่หนูอยากเห็นอยากดูไม่คิดอะไรให้มันรอบครอบ หนูไม่อยากให้พี่คิดว่าหนูไม่สนใจพี่หรือคิดถึงแต่ตัวเองเลยนะบิบี๋ เพราะจริงๆหนูคิดถึงพี่มากๆ ขอโทษที่หนูเลินเล่อไป หนูง้อๆบะบี๋นะ ถ้าพี่ยังโกรธ หนูเข้าใจพี่ ไม่บังคับให้พี่หายทันที แต่ถ้าพี่ดีขึ้นบ้างแล้วพี่มาคุยกับหนูบ้างนะที่รัก 💖✨";
}
