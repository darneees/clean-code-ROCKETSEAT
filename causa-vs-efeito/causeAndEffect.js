// CAUSA E EFEITO - REACT

function Button() {

    const isButtonDisabled // --> isFormingSubmitting

    /**
     * geralmente se deve criar uma variavel boleana sempre pensando no motivo/causa 
     * e nao no efeito, onde você poderia substituir a existente por outra que faça mais coeso, 
     * como: `isFormingSubmitting`
     */

    = true;

    return (
        <Button disabled={isButtonDisabled} // --> isFormingSubmitting
        > 
            <span></span>

            {isButtonDisabled // --> isFormingSubmitting
            ? 'Carregando' : 'Enviar'}
            
        </Button>
    )
}