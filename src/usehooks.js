import {useRef, useEffect} from 'react'

const useCurrentValue = (value) =>{
    const valueRef = useRef(value)

    useEffect(()=>{
        valueRef.current = value
    }, [value])

    return valueRef
}

const useTitle = (title) => {
    useEffect(() => {
      document.title = title
    }, [])

    return
  }

  const useUpdate = () =>{
    const [,setFlag] = useState()
    const update = () =>{
        setFlag(new Date())
    }

    return update
}


const useScroll = (scrollRef) => {
    const [pos, setPos] = useState([0,0])
  
    useEffect(() => {
      function handleScroll(e){
        setPos([scrollRef.current.scrollLeft, scrollRef.current.scrollTop])
      }
      scrollRef.current.addEventListener('scroll', handleScroll, false)
      return () => {
        scrollRef.current.removeEventListener('scroll', handleScroll, false)
      }
    }, [])
  
    return pos
  }
