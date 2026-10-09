/* eslint-disable @next/next/no-img-element -- HTML img tags are the purpose of this exercise. */
export default function Images() {
  return (
    <div id="wd-images">
      <h4>Image tag</h4>
      Loading an image from the internet:
      <br />
      <img
        id="wd-starship"
        width="400"
        alt="Starship"
        src="https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2b/Starship_full_stack_with_Jeep.jpg/500px-Starship_full_stack_with_Jeep.jpg"
      />
      <br />
      <small>
        Starship photo by{" "}
        <a href="https://commons.wikimedia.org/wiki/File:Starship_full_stack_with_Jeep.jpg">
          Hotel Pika
        </a>
        ,{" "}
        <a href="https://creativecommons.org/licenses/by-sa/2.0/">
          CC BY-SA 2.0
        </a>
        .
      </small>
      <br />
      Loading a local image:
      <br />
      <img
        id="wd-teslabot"
        src="/images/teslabot.jpg"
        height="200"
        alt="Tesla Bot (Optimus) humanoid robot"
      />
      <h5>My GitHub avatar</h5>
      <img
        id="wd-your-image"
        src="https://avatars.githubusercontent.com/u/223978849?v=4"
        width="160"
        alt="Zongbin Yan's GitHub avatar"
      />
      <h5>Another remote image</h5>
      <img
        id="wd-ai-image"
        src="https://images-assets.nasa.gov/image/PIA18033/PIA18033~orig.jpg"
        width="200"
        alt="Earth photographed from space"
      />
    </div>
  );
}
