export default function compose(...fns: Function[]){
  if(!fns) return <T>(arg: T) => arg
  if(fns.length === 1) return fns[0]

  return fns.reduce((a, b) => (...args: any) => a(b(...args)))
}
