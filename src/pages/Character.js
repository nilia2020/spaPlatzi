const Character = () => {
    const view = /*html*/`
    <div class="Characters-inner">
        <article class="Characters-card">
            <a href="#/1/">
                <img src="image" alt="name">
                <h2>Name</h2>
            </a>
        </article>
        <article class="Characters-card">
            <h3>Episodes:</h3>
            <h3>Status:</h3> 
            <h3>Species:</h3> 
            <h3>Gender:</h3> 
            <h3>Origin:</h3> 
            <h3>Last location:</h3> 
        </article>
    </div>
    `
    return view
}

export default Character