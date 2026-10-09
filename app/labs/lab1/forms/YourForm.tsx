"use client";
import { useRef, useState } from "react";
export default function YourForm() {
  const form = useRef<HTMLFormElement>(null);
  const [message, setMessage] = useState("");
  return (
    <section>
      <h4>Student Profile</h4>
      <form
        id="wd-your-form"
        ref={form}
        onSubmit={(event) => {
          event.preventDefault();
          setMessage(
            "Profile form checked. This HTML exercise does not store data.",
          );
        }}
      >
        <label htmlFor="wd-your-name">Name:</label>
        <input id="wd-your-name" name="name" defaultValue="Zongbin Yan" />
        <br />
        <label htmlFor="wd-your-password">Practice password:</label>
        <input
          id="wd-your-password"
          type="password"
          autoComplete="new-password"
          placeholder="Use a demo password only"
        />
        <br />
        <label htmlFor="wd-your-bio">Biography:</label>
        <br />
        <textarea
          id="wd-your-bio"
          name="bio"
          rows={4}
          cols={40}
          defaultValue="I study computer science and enjoy piano, photography, and cooking."
        />
        <br />
        <fieldset>
          <legend>Class standing</legend>
          <label>
            <input
              id="wd-standing-undergraduate"
              type="radio"
              name="standing"
              value="undergraduate"
            />
            Undergraduate
          </label>
          <label>
            <input
              id="wd-standing-graduate"
              type="radio"
              name="standing"
              value="graduate"
              defaultChecked
            />
            Graduate
          </label>
        </fieldset>
        <fieldset>
          <legend>Study format</legend>
          <label>
            <input
              id="wd-study-inperson"
              type="radio"
              name="study-format"
              value="in-person"
              defaultChecked
            />
            In person
          </label>
          <label>
            <input
              id="wd-study-online"
              type="radio"
              name="study-format"
              value="online"
            />
            Online
          </label>
        </fieldset>
        <fieldset>
          <legend>Interests</legend>
          <label>
            <input
              id="wd-interest-piano"
              type="checkbox"
              name="interest"
              value="piano"
              defaultChecked
            />
            Piano
          </label>
          <label>
            <input
              id="wd-interest-photography"
              type="checkbox"
              name="interest"
              value="photography"
              defaultChecked
            />
            Photography
          </label>
          <label>
            <input
              id="wd-interest-cooking"
              type="checkbox"
              name="interest"
              value="cooking"
              defaultChecked
            />
            Cooking
          </label>
        </fieldset>
        <label htmlFor="wd-your-program">Program:</label>
        <select id="wd-your-program" name="program" defaultValue="cs">
          <option value="cs">Computer Science</option>
          <option value="ds">Data Science</option>
          <option value="is">Information Systems</option>
          <option value="se">Software Engineering</option>
        </select>
        <br />
        <label htmlFor="wd-your-topics">Topics to practice:</label>
        <br />
        <select
          id="wd-your-topics"
          name="topics"
          multiple
          defaultValue={["html", "next"]}
        >
          <option value="html">HTML</option>
          <option value="css">CSS</option>
          <option value="js">JavaScript</option>
          <option value="next">Next.js</option>
        </select>
        <br />
        <label htmlFor="wd-your-email">School email:</label>
        <input
          id="wd-your-email"
          name="email"
          type="email"
          placeholder="Enter your school email"
        />
        <br />
        <label htmlFor="wd-your-graduation">Graduation year:</label>
        <input
          id="wd-your-graduation"
          name="graduation"
          type="number"
          min={2026}
          max={2035}
          placeholder="Year"
        />
        <br />
        <label htmlFor="wd-your-date">Study date:</label>
        <input id="wd-your-date" name="study-date" type="date" />
        <br />
        <label htmlFor="wd-your-confidence">HTML confidence (0-10):</label>
        <input
          id="wd-your-confidence"
          type="range"
          min={0}
          max={10}
          defaultValue={2}
        />
        <br />
        <button id="wd-your-save" type="submit">
          Save
        </button>{" "}
        <button
          id="wd-your-cancel"
          type="button"
          onClick={() => {
            form.current?.reset();
            setMessage("");
          }}
        >
          Cancel
        </button>
        <p role="status">{message}</p>
      </form>
    </section>
  );
}
