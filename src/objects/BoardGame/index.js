import "./style.css"
import CardGame from "../../components/CardGame";


function BoardGame(amountCards){
    const $htmlCardGame = CardGame();
    const $htmlContent = $htmlCardGame.repeat(amountCards);

    console.log($htmlContent)


    return `
        <section class='board-game'>
            ${$htmlContent}
        </section>`;

}

export default BoardGame