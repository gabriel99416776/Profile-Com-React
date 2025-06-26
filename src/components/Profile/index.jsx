import styles from "./styles.module.css"



// (props) PODE SER SUBSTITUIDO PELO NOME DO ATRIBUTO.

export default function Profile({ name, avatar, bio, phone, email, githubUrl, linkedinUrl, instagramUrl }){
    return(
        <div className={styles.container}>
            <img className={styles.avatar} src={avatar} alt={name} />
            <h2>{name}</h2>
            <div>{bio}</div>
            <div>{phone}</div>
            <div>{email}</div>

            <div className={styles.links}>
                <a href={githubUrl} target="_blank">GitHub</a>
                <a href={linkedinUrl} target="_blank">LikedIn</a>
                <a href={instagramUrl} target="_blank">Instagram</a>
            </div>
        </div>
    )
}