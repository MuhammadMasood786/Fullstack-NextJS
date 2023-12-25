


export default function Layout(props: {
    children: React.ReactNode
    analytics: React.ReactNode
    teams: React.ReactNode
  }) {
    return (
      <div className="py-8 px-48">
        {props.children}
        {props.teams}
        {props.analytics}
      </div>
      
    )
  }