export const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUri = "http://localhost:3000/";
const client_id = "d18826305c4c4a2db2d55c35f3a3c82c";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

//to extract the access token from url response

export const getAccessToken = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((init, item) => {
      let parts = item.split("=");
      init[parts[0]] = decodeURIComponent(parts[1]);

      return init;
    }, {});
};

//%20 is ascii code to " " (space)
export const loginUrl = `${authEndpoint}?client_id=${client_id}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialoge=true`;
