import Profile from "./components/Profile";


export default function App(){
  return(
    <div className="app">
      <Profile 
        avatar="https://randomuser.me/api/portraits/men/75.jpg"
        name="Gabriel"
        bio="Font-end React/JS"
        email="gabrielfortaleza4@gmail.com"
        phone="(85)9 9941-6776"
        githubUrl="https://github.com/gabriel99416776"
        linkedinUrl="https://www.linkedin.com/in/jo%C3%A3o-gabriel-de-sousa-alves-122321249/"
        instagramUrl="https://www.instagram.com/accounts/login/?source=logged_out_megaphone_signup"
      />
    </div>
  )
}