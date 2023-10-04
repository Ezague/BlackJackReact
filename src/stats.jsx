/* eslint-disable react/prop-types */
export function Stats({wins, draws, losses}) {
    const spillerStats = `${wins}/${draws}/${losses}`;
    return (
        <section className="stats">
            <div>
                <h2>Game stats</h2>
                <p>{spillerStats}</p>
            </div>
        </section>
    )
}