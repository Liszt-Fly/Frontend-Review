import { customRef } from "vue"

export function debounceRef(value,time=1000){
    let timer:number;
    return customRef((track,trigger)=>{
        return {
            get() {
                track()
                return value
            },
            set(val){
                if(timer)clearTimeout(timer);
                timer=setTimeout(() => {
                    trigger()
                    value=val; 
                }, time);

            }
        }
    })
}