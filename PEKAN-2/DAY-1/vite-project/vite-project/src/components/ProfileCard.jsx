function ProfileCard() {
  return (
    <div className="profile-card">
      <img 
        src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=800" 
        alt="Foto Profil"
      />

      <h2>Nama Pengguna</h2>
      <p>Ini adalah biodata singkat pengguna.</p>

      <ul>
        <li>Skill 1</li>
        <li>Skill 2</li>
        <li>Skill 3</li>
      </ul>
    </div>
  );
}

export default ProfileCard;
