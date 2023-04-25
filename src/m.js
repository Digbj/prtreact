const [hotel,setHotel]=useState([])
async function fetchAPI(){
    const data=await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&offset=95&sortBy=RELEVANCE&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING')
    
    const json=await data.json()
   
    setHotel(json?.data?.cards)
}
useEffect(()=>{
    fetchAPI()
},[])