import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// export ECDSA circuit data
async function main() {
  await prisma.proof.create({
    data: {
      filename: "dizkus_64_4_30",
      definition: "ECDSA-secp256k1",
      path_length: 30,
      vkey: `{"protocol":"groth16","curve":"bn128","nPublic":5,"vk_alpha_1":["20491192805390485299153009773594534940189261866228447918068658471970481763042","9383485363053290200918347156157836566562967994039712273449902621266178545958","1"],"vk_beta_2":[["6375614351688725206403948262868962793625744043794305715222011528459656738731","4252822878758300859123897981450591353533073413197771768651442665752259397132"],["10505242626370262277552901082094356697409835680220590971873171140371331206856","21847035105528745403288232691147584728191162732299865338377159692350059136679"],["1","0"]],"vk_gamma_2":[["10857046999023057135944570762232829481370756359578518086990519993285655852781","11559732032986387107991004021392285783925812861821192530917403151452391805634"],["8495653923123431417604973247489272438418190587263600148770280649306958101930","4082367875863433681332203403145435568316851327593401208105741076214120093531"],["1","0"]],"vk_delta_2":[["14514411805591948014599167372248226314329088439735639194025468362436687321319","12448420927946703235782556968375753805536856832018091321738857169585893914746"],["3281819558698333991759862501953628169553517525465558337123156056229024193428","11268802668211388069935987403410398077734465864333384187539184680636800390337"],["1","0"]],"vk_alphabeta_12":[[["2029413683389138792403550203267699914886160938906632433982220835551125967885","21072700047562757817161031222997517981543347628379360635925549008442030252106"],["5940354580057074848093997050200682056184807770593307860589430076672439820312","12156638873931618554171829126792193045421052652279363021382169897324752428276"],["7898200236362823042373859371574133993780991612861777490112507062703164551277","7074218545237549455313236346927434013100842096812539264420499035217050630853"]],[["7077479683546002997211712695946002074877511277312570035766170199895071832130","10093483419865920389913245021038182291233451549023025229112148274109565435465"],["4595479056700221319381530156280926371456704509942304414423590385166031118820","19831328484489333784475432780421641293929726139240675179672856274388269393268"],["11934129596455521040620786944827826205713621633706285934057045369193958244500","8037395052364110730298837004334506829870972346962140206007064471173334027475"]]],"IC":[["4416359243785845614928830905042558241448786067717286588029918961011248566159","657537131130723958974278442357345374633769926570610849537938529447207924585","1"],["9801240970961555798249820861688601078389971252826002577984887676045438542929","4998747723296658282305243850564451517254473029408788787327526797612511260676","1"],["1505325706428080478076580663091310191620710933612921196891028072837262337915","13302581523642080006237090172324909240090728075284836902857291853978152045223","1"],["12446038361845845843226931476283065082657320392788760780858707902965920794050","16773132330270585929527570162726661651596830105756702278702209977167337577060","1"],["1106540276955634674446677358037567395047231879536641449405174721798516209066","14809921129981547192158165765815056125578280313882044016070887914327849400706","1"],["19928064817518581962867854606912848828795691931064914200612385023485060577160","10439171401122390894421006578355192923464380932941591930426996414079505754721","1"]]}`,
      zkey_link: "https://d27ahxc61uj811.cloudfront.net/",
      circuit_link:
        "https://github.com/dizkus/circuits/blob/master/circuits/dizkus.circom",
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
