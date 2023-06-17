/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", 
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "secure-primary":"#00DFA2",
        "secure-secondary": "#4F709C",
        "secure-danger": "#FF0060",
        "secure-info": "#0079FF",
        "secure-warning":"#F6FA70"
      }
    },
    fontFamily: {
      Poppins: ["Poppins, sans-serif"]
    },
    container: {
      padding: "2rem",
      center: true,
    },

  },
  plugins: [],
}

