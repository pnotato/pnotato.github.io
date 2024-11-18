import Wave from 'react-wavify'
import './WaveDivider.css'

function WaveDivider() {
    return (
        <>
            <div className="waves">
                <div className="wave">
                    <Wave fill='#ffc371'
                        paused={false}
                        style={{ display: 'flex', transform: 'translateY(-5px)' }}
                        options={{
                            height: 20,
                            amplitude: 40,
                            speed: 0.15,
                            points: 7
                        }}
                    />
                </div>
                <div className="wave">
                    <Wave fill='#ff8a6f'
                        paused={false}
                        style={{ display: 'flex', transform: 'translateY(-5px)' }}
                        options={{
                            height: 100,
                            amplitude: 30,
                            speed: 0.20,
                            points: 5
                        }}
                    />
                </div>
                <div className="wave">
                    <Wave fill='#ff5f6d'
                        paused={false}
                        style={{ display: 'flex', transform: 'translateY(10px)' }}
                        options={{
                            height: 150,
                            amplitude: 30,
                            speed: 0.20,
                            points: 3
                        }}
                    />
                </div>
            </div>
        </>
    )
};

export default WaveDivider;