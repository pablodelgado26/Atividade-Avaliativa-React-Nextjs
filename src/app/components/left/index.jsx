const { default: Banner } = require("../banner");
const { default: CardCriadores } = require("../cardCriadores");
const { default: CardDestaques } = require("../cardDestaque");
const { default: CardPopulares } = require("../cardPopulares");
const { default: Categories } = require("../categories");
const { default: Criadores } = require("../criadores");
const { default: FeaturedSection } = require("../featuredSection");
const { default: Feed } = require("../feed");
const { default: NewsLetter } = require("../newsLetter");
import styles from "./left.module.css"

const Left = () => {
    return (
        <div className={styles.contentArea}>
            <Banner
                title={"Meme do Dia: Quando seu código funciona de primeira"}
                description={"Este momento raro que todos os desenvolvedores sonham em experimentar!"}
                image={"https://i.imgur.com/vldGJnz.jpg"}
                likes={2452}
                comments={387}
                author={"SuperCoder"}
                authorAvatar={"https://i.pravatar.cc/150?img=20"}
            />

            <Categories />

            <Feed>
                <CardPopulares
                    title={"Programador às 3 da manhã"}
                    description={"Quando o código finalmente funciona depois de 5 horas debugando"}
                    image={"https://i.imgur.com/JbIMvq2.jpg"}
                    likes={452}
                    comments={87}
                    author={"DevMaster"}
                    authorAvatar={"https://i.pravatar.cc/150?img=11"}
                    category={"Programação"}
                />
                <CardPopulares
                    title={"Vida de estudante"}
                    description={"Eu entrando na prova sem estudar"}
                    image={"https://i.imgur.com/DpEHvFs.jpg"}
                    likes={231}
                    comments={56}
                    author={"StudyGuru"}
                    authorAvatar={"https://i.pravatar.cc/150?img=12"}
                    category={"Escola"}
                />
                <CardPopulares
                    title={"Reunião que poderia ser um e-mail"}
                    description={"Minha cara depois de 2 horas de reunião"}
                    image={"https://i.imgur.com/a1hJwXc.jpg"}
                    likes={631}
                    comments={103}
                    author={"CorporateJoker"}
                    authorAvatar={"https://i.pravatar.cc/150?img=13"}
                    category={"Trabalho"}
                />
                <CardPopulares
                    title={"Quando a internet cai"}
                    description={"POV: Você no meio de uma partida importante"}
                    image={"https://i.imgur.com/uGdnlGj.jpg"}
                    likes={842}
                    comments={152}
                    author={"GamerLife"}
                    authorAvatar={"https://i.pravatar.cc/150?img=14"}
                    category={"Games"}
                />
                <CardPopulares
                    title={"Segunda-feira chegando"}
                    description={"Ninguém está pronto para isso"}
                    image={"https://i.imgur.com/aNDyAyC.jpg"}
                    likes={753}
                    comments={91}
                    author={"WeekendWarrior"}
                    authorAvatar={"https://i.pravatar.cc/150?img=15"}
                    category={"Trabalho"}
                />
                <CardPopulares
                    title={"Minha vida amorosa"}
                    description={"Expectativa vs Realidade"}
                    image={"https://i.imgur.com/gMy6q9Y.jpg"}
                    likes={523}
                    comments={78}
                    author={"RomanceExpert"}
                    authorAvatar={"https://i.pravatar.cc/150?img=16"}
                    category={"Relacionamentos"}
                />
            </Feed>

            <FeaturedSection>
                <CardDestaques
                    title={"O código em produção"}
                    image={"https://i.imgur.com/aVy8tFB.jpg"}
                    author={"DevHumor"}
                    category={"Programação"}
                    trending={true}
                />
                <CardDestaques
                    title={"Modo escuro vs Modo claro"}
                    image={"https://i.imgur.com/YnGsVzS.jpg"}
                    author={"UIDesigner"}
                    category={"Tecnologia"}
                    trending={true}
                />
                <CardDestaques
                    title={"POV: Aula online"}
                    image={"https://i.imgur.com/4MigGYQ.jpg"}
                    author={"ZoomExpert"}
                    category={"Escola"}
                    trending={false}
                />
            </FeaturedSection>

            <Criadores>
                <CardCriadores
                    name={"MemeQueen"}
                    avatar={"https://i.pravatar.cc/150?img=23"}
                    followers={"245K"}
                    bio={"Criando memes que fazem seu dia melhor!"}
                />
                <CardCriadores
                    name={"FunnyGuy42"}
                    avatar={"https://i.pravatar.cc/150?img=24"}
                    followers={"189K"}
                    bio={"Especialista em memes de programação e gatos"}
                />
                <CardCriadores
                    name={"LaughFactory"}
                    avatar={"https://i.pravatar.cc/150?img=25"}
                    followers={"327K"}
                    bio={"Se não te fizer rir, devolvo seu tempo!"}
                />
            </Criadores>

            <NewsLetter />
        </div>
    );
}

export default Left;