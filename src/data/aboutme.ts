export interface AboutMe {
  name: string;
  title: string;
  institution: string;
  description: string;
  email: string;
  imageUrl?: string;
  blogUrl?: string;
  cvUrl?: string;
  googleScholarUrl?: string;
  twitterUsername?: string;
  githubUsername?: string;
  linkedinUsername?: string;
  funDescription?: string; // Gets placed in the left sidebar
  secretDescription?: string; // Gets placed in the bottom
  altName?: string;
  institutionUrl?: string;
}

export const aboutMe: AboutMe = {
  name: "Katelyn Xiaoying Mei",
  title: "Ph.D. Student",
  institution: "University of Washington",
  // Note that links work in the description
  description:
    "I'm a third-year <a href='https://ischool.uw.edu/'>PhD student</a> in Information Science \
     I'm fortunate to be advised by <a href='https://llwang.net/'>Lucy Lu Wang </a> \
     and <a href = 'https://homes.cs.washington.edu/~reinecke/'> Katharina Reinecke</a>. \
     Before my PhD, I spent four amazing years at <a href='https://www.middlebury.edu/'> \
     Middlebury College</a> from which I obtained my Bachelor's of Art in Psychology and\
     Mathematics. Meanwhile, I learned to explore and appreciate the perspectives from a \
     variety of disciplines including philosophy, anthropology, and architecture design.\n\n"+
    "My research interests derive from the intersection of psychology, humanties, and Human-AI interaction.\
    My research examines how individuals engage with AI systems differently and what can (cannot) facilitate \
    effective Human-AI collaboration.",
  email: "kmei@uw.edu",
  imageUrl: "/profile.jpg",
  googleScholarUrl: "https://scholar.google.com/citations?user=m8Fcl7QQLMAC&hl=en",
  githubUsername: "mooniem",
  linkedinUsername: "katelynmei",
  // twitterUsername: "janesmith",
  // blogUrl: "https://",
  // cvUrl: "https://",
  // institutionUrl: "https://www.stanford.edu",
  // altName: "",
  // secretDescription: "I like dogs.",
};
