const { default: CardCompeticoes } = require("../cardCompeticoes");
const { default: SideBar } = require("../sideBar");

const Right = () => {
    return (
        <div>
            <SideBar>
                <CardCompeticoes
                    title={"Competições de Memes 2025"}
                    date={"15 de Maio, 2025"}
                    participants={356}
                />
                <CardCompeticoes
                    title={"Workshop: Como Criar Memes Virais"}
                    date={"22 de Maio, 2025"}
                    participants={127}
                />
            </SideBar>

        </div>
    );
}

export default Right;