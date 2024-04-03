export const formatData=(date)=>{
     const hours=new Date(date).getHours();
     const minute=new Date(date).getMinutes();
     return `${hours<10?'0'+hours:hours}:${minute<10?'0'+minute:minute}`
}