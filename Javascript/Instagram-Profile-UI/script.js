// Mock profile data (like Instagram API response)
const profile = {
  username: "jai_dalmotra",
  posts: 128,
  followers: 15200,
  following: 180,
  bio: "ML | Research | Building things with code 🚀",
  isFollowing: false
};

// Format follower count (15.2K)
function formatCount(num) {
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + "K";
  }
  return num;
}

// Toggle follow button
function toggleFollow(button, profile) {
  profile.isFollowing = !profile.isFollowing;
  button.textContent = profile.isFollowing ? "Following" : "Follow";
  button.style.background = profile.isFollowing ? "#efefef" : "#0095f6";
  button.style.color = profile.isFollowing ? "#000" : "#fff";
}

// Render profile UI
function renderProfile(profile) {
  const container = document.getElementById("profile-container");

  const card = document.createElement("div");
  card.className = "profile-card";

  card.innerHTML = `
    <div class="profile-header">
      <div class="profile-pic"></div>
      <div class="username">${profile.username}</div>
    </div>

    <div class="stats">
      <div class="stat"><strong>${profile.posts}</strong> posts</div>
      <div class="stat"><strong>${formatCount(profile.followers)}</strong> followers</div>
      <div class="stat"><strong>${profile.following}</strong> following</div>
    </div>

    <div class="bio">${profile.bio}</div>

    <button class="follow-btn">
      ${profile.isFollowing ? "Following" : "Follow"}
    </button>
  `;

  container.appendChild(card);

  const followBtn = card.querySelector(".follow-btn");
  followBtn.addEventListener("click", () =>
    toggleFollow(followBtn, profile)
  );
}

// Init
renderProfile(profile);
