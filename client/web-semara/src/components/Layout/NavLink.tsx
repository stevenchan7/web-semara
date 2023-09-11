export default function Link({children, url} : {children: string ,url: string}) {
  return(
    <li>
      <a className="hover:text-primary-blue hover:border-b-4 border-primary-blue" href={ url }>{ children }</a>
    </li>
  )
}