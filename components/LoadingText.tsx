import { useState, useEffect } from 'react';
import { ClipLoader } from "react-spinners";


const textArray = [
  'Running magic moon math in the browser 🌚🌚🌚',
  "Vitalik probably thinks you're cool for generating a ZK proof",
  'Welcome to the future of b l o c k c h a i n',
  "Pop quiz: what's the difference between the ate, tate pairing?",
  'Bonus question: are ate, kate, and tate related?',
  "If you think this is slow, why don't you try solving y^2=x^3+Ax+B yourself?",
  '👻👻👻👻👻👻',
  'Running automated venture capitalist detection...',
]

type Props = {
  currentStage: string
}

export default function LoadingText({ currentStage }: Props) {
  const [timer, setTimer] = useState(0)
  const [text, setText] = useState(textArray[0])

  useEffect(() => {
    setTimeout(() => setTimer(timer+1), 1000)
  }, [timer])

  useEffect(() => {
    const changeSeconds = 5
    if (timer % changeSeconds != 0) return
    setText(textArray[(timer / changeSeconds) % textArray.length])
  }, [timer])

  return (
    <div>
      <div className="flex">
        <span className='font-bold pr-2'> Currently:  </span>
        <span> {`${currentStage}`} </span>
        <div className="pl-2">
          <ClipLoader color={"black"} loading={true} size={15} />
        </div>
      </div>
      <div className="flex">
        <span className='font-bold pr-2'> Note:  </span>
        <span> Your page may become unresponsive, but keep waiting! </span>
      </div>
      {/* <div>
        <span className="font-bold text-heyanonyellow">{`>>> `}</span>
        <span> Running for {timer} seconds </span>
      </div>
      <div>
        <span className="font-bold text-heyanonyellow">{`>>> `}</span>
        <span> {text} </span>
      </div> */}
    </div>
  )
}
