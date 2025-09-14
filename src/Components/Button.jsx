export const Button = ({children, theme, className, href, onClick, type = "button"}) => {

const basClasse = "text-white hover:text-white"
const themClass = 
    theme === "primary"
    ? "bg-blue-600 hover:bg-blue-500 duration-300 ease-in-out" 
    : theme === "secondery"
    ? "bg-blue-950 hover:bg-blue-500 duration-300 ease-in-out"
    :""
    const renderButton =()=> (
        (<button 
          type={type}
          onClick={onClick}
          className={`button py-3 px-3 lg:py-4 px-6 rounded-lg ${themClass} ${basClasse} ${className}`}
        >
          {children}
        </button>)
    )

    const renderLink =()=> (
       (<a href={href} className={`inline-block py-3 px-3 lg:py-4 px-6 rounded-lg no-underline ${themClass} ${basClasse} ${className}`}>{children}</a>)
    )

return href ? renderLink() : renderButton()

}