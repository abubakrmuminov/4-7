// JavaScript-da spread va rest operatorlari uchun 5 ta qiziqarli masala
// Har bir masala real hayotdan ilhomlangan va Sokratik savollar bilan birga keltirilgan
// Quyidagi masalalar funksiya skeletlarini o'z ichiga oladi, lekin yechimni o'zingiz topishingiz kerak!

// ============================================================
// 1-MASALA: Kosmik sayohat ekipajini birlashtirish
// ============================================================
/*
Siz galaktikalararo ekspeditsiya tashkil qilyapsiz! Har bir kosmik kemada oвЂz ekipaji bor, 
lekin barcha ekipaj aвЂ™zolarini bitta roвЂyxatga birlashtirish kerak. 
Funksiya yozing, u bir nechta ekipaj massivlarini qabul qilib, ularni bitta umumiy roвЂyxatga birlashtirsin.

Input: uniteCrews(["Luke", "Leia"], ["Han", "Chewie"], ["R2-D2", "C-3PO"])
Output: ["Luke", "Leia", "Han", "Chewie", "R2-D2", "C-3PO"]
*/
function uniteCrews(...crews) {
  const crew = []
}

// Sokratik savollar:
// 1. Agar funksiyaga bir nechta massiv kelsa, spread operatori (`...`) ularni qanday birlashtirishi mumkin? Masalan, `[...arr1, ...arr2]` nima qiladi?
// 2. `...crews` yozsangiz, `crews` qanday maвЂ™lumot turi boвЂladi? U massivlarni oвЂz ichiga olgan massivmi yoki boshqa narsa?
// 3. Agar baвЂ™zi ekipaj roвЂyxatlari boвЂsh boвЂlsa, masalan, `[]`, bu natijaga qanday taвЂ™sir qiladi?
// 4. Spread operatoridan tashqari, `concat` metodidan foydalansangiz, kod qanday farq qiladi? Qaysi usul qulayroq?

// ============================================================
// 2-MASALA: Super qahramonlarning kuchlarini hisoblash
// ============================================================
/*
  Siz super qahramonlar jamoasining murabbiysisiz! Har bir qahramon oвЂz kuch darajasini keltiradi, 
  lekin sizga ularning umumiy kuchini hisoblash kerak. 
  Funksiya yozing, u istalgancha kuch darajasini qabul qilib, ularning yigвЂindisini qaytarsin.
  
  Input: 
    calculatePower(10, 20, 30)
    calculatePower(5, 15, 25, 35)
  Output: 
    60
    80
  */
function calculatePower(...powers) {
  // Sizning kodingiz bu yerga keladi
}

// Sokratik savollar:
// 1. Rest operatori (`...powers`) funksiyaga kelgan argumentlarni qanday shaklda yigвЂadi? `powers` nima boвЂladi?
// 2. `powers` massiv sifatida keladi. Uni yigвЂindi hisoblash uchun qanday usuldan foydalanasiz? Masalan, `forEach` yoki `reduce`?
// 3. Agar hech qanday argument kelmagan boвЂlsa, funksiyangiz qanday javob qaytarishi kerak?
// 4. Spread operatori bu masalada qayerda foydali boвЂlishi mumkin? Masalan, agar massiv ichidagi sonlarni funksiyaga uzatish kerak boвЂlsa?

// ============================================================
// 3-MASALA: Sehrli artefaktlarni birlashtirish
// ============================================================
/*
  Siz sehrgarlar kengashidasiz! Har bir sehrgar oвЂz artefaktini (obвЂekt sifatida) keltiradi, 
  va siz ularning barcha xususiyatlarini bitta kuchli artefaktga birlashtirishingiz kerak. 
  Funksiya yozing, u bir nechta obвЂektni qabul qilib, ularning kalit-qiymat juftliklarini birlashtirsin.
  
  Input: 
    combineArtifacts({ spell: "Fireball" }, { weapon: "Wand" }, { armor: "Robe" })
  Output: 
    { spell: "Fireball", weapon: "Wand", armor: "Robe" }
  */
function combineArtifacts(...artifacts) {
  // Sizning kodingiz bu yerga keladi
}

// Sokratik savollar:
// 1. Spread operatori obвЂektlarni birlashtirishda qanday ishlaydi? Masalan, `{...obj1, ...obj2}` nima qiladi?
// 2. Agar bir xil kalit ikki obвЂektda boвЂlsa, masalan, `{ spell: "Fireball" }` va `{ spell: "Icebolt" }`, natija qanday boвЂladi?
// 3. Funksiyaga nomaвЂlum miqdordagi obвЂektlar kelsa, rest operatori qanday yordam beradi?
// 4. Spread operatoridan tashqari, obвЂektlarni birlashtirish uchun `Object.assign` ishlatilsa, qanday farq boвЂladi?

// ============================================================
// 4-MASALA: Robotlarning buyruqlarini uzatish
// ============================================================
/*
  Siz robotlar armiyasini boshqaryapsiz! Har bir robotga buyruqlar roвЂyxati (massiv) berilgan, 
  lekin siz ularni alohida buyruqlar sifatida boshqaruvchi funksiyaga uzatishingiz kerak. 
  Funksiya yozing, u massivni qabul qilib, uning elementlarini boshqa funksiyaga alohida argumentlar sifatida uzatsin.
  
  Input: 
    sendCommands(["move", "turn", "stop"], executeCommand)
    // executeCommand("move", "turn", "stop") deb chaqirilishi kerak
  Output: 
    (executeCommand natijasiga bogвЂliq, masalan, "Commands executed!")
  */
function sendCommands(commands, executeCommand) {
  // Sizning kodingiz bu yerga keladi
}

// Misol foydalanish:
function executeCommand(...args) {
  console.log("Executing:", args);
}

// Sokratik savollar:
// 1. Massiv elementlarini alohida argumentlar sifatida uzatish uchun spread operatori qanday ishlaydi? Masalan, `fn(...arr)` nima qiladi?
// 2. `sendCommands(["move", "turn"], executeCommand)` chaqirilganda, `executeCommand` qanday argumentlar oladi?
// 3. Agar `commands` massivi boвЂsh boвЂlsa, funksiyangiz qanday ishlashi kerak?
// 4. Rest operatori bu masalada qayerda foydali boвЂlishi mumkin? Masalan, `executeCommand` ichida?

// ============================================================
// 5-MASALA: Xazina sandigвЂini qismlarga ajratish
// ============================================================
/*
  Siz xazina ovchisisiz! Har bir xazina sandigвЂida narsalar roвЂyxati (massiv) bor. 
  Funksiya yozing, u sandiqdagi birinchi narsani va qolgan narsalarni alohida qaytarsin.
  
  Input: 
    splitTreasure(["Gold", "Ruby", "Diamond", "Emerald"])
  Output: 
    { first: "Gold", rest: ["Ruby", "Diamond", "Emerald"] }
  */
function splitTreasure(treasure) {
  // Sizning kodingiz bu yerga keladi
}

// Sokratik savollar:
// 1. Massivning birinchi elementini va qolganlarini ajratish uchun rest operatori qanday ishlatiladi? Masalan, `[first, ...rest] = arr` nima qiladi?
// 2. Agar sandiq boвЂsh boвЂlsa (`[]`) yoki faqat bitta narsa boвЂlsa, funksiyangiz qanday javob qaytarishi kerak?
// 3. Spread operatori bu masalada qayerda foydali boвЂlishi mumkin? Masalan, natija massivini qayta shakllantirishda?
// 4. Agar funksiyani rekursiv qilib, sandiqni butunlay qismlarga ajratmoqchi boвЂlsangiz, rest operatori qanday yordam beradi?

// ============================================================
// Test qilish uchun misollar
// ============================================================
console.log(
  uniteCrews(["Luke", "Leia"], ["Han", "Chewie"], ["R2-D2", "C-3PO"])
);
console.log(calculatePower(10, 20, 30));
console.log(
  combineArtifacts({ spell: "Fireball" }, { weapon: "Wand" }, { armor: "Robe" })
);
console.log(splitTreasure(["Gold", "Ruby", "Diamond", "Emerald"]));