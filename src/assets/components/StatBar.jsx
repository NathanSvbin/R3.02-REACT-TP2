import './../StatBar.css'

function StatBar({titre, quantité, maximum, type}) {


    const tauxRemplissage = (quantité/maximum)*100

    return(
        <div class="stat-bar">
            <div class={`stat-bar--${type}`}>
            <div class="stat-bar__label">
                <span class="stat-bar__name">{titre}</span>
                <span class="stat-bar__value">{quantité} / {maximum}</span>
            </div>

            <div class="stat-bar__track">
                <div class="stat-bar__fill">

                </div>
            </div>
            </div>
        </div>
        
    );

}