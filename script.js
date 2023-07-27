const ebooks = [
  { name: "Binary Search Tree", category: "DSA", description: "DSA codes by Samaleswari Sir", availability: "Trending", link: "https://alokrajcse.github.io/BST.io/" },
  { name: "DSA Notes (All modules)", category: "DSA", description: "Contributed by someone from SIT", availability: "Show", link: "https://drive.google.com/open?id=1MXglKMWI3bK3nkhauWr85rlgcEIu5eB_" },
  { name: "Steve Jobs", category: "CTE", description: "CTE Texts", availability: "Most Popular", link: "https://drive.google.com/file/d/1GJjHQK-6z7N9AntfkVZ86_HOpMN9eupp/view?usp=drive_link" },
  { name: "CTE MOD 1&2 Handwritten Notes", category: "CTE", description: "CTE", availability: "Show", link: "https://drive.google.com/file/d/1SuWM1rGs83_6YMc_EBK3VHKFsifzikxG/view?usp=sharing" },
  { name: "Physics handwritten notes (MOD 1-5)", category: "Physics", description: "Physics", availability: "Show", link: "https://drive.google.com/file/d/1OMZAcx4_BXckrV1IutvmD-DTOYvN8wNL/view?usp=sharing" },


{
    title: "Machining Job No. 3",
    category: "MP LAB Drawing Tutorials",
    link: "https://driveplyr.sh20raj.repl.co/vlitejs.html?id=eyJpZCI6WyIxdWNoNmRUYmtWT09fMXhVeGlnbkdSTkNPR1k2cVdiY2siXX0="
  },
  {
    title: "Machining Job No. 4",
    category: "MP LAB Drawing Tutorials",
    link: "https://drive.google.com/file/d/1cRQyNvLyQn7_Mgy-G1DfQgUgGn3oBdlD/view?usp=drive_link"
  },
  {
    title: "Sheet Metal Job(Job no. 7)",
    category: "MP LAB Drawing Tutorials",
    link: "https://drive.google.com/file/d/1-6Ioqx6hM-9XJZ4mIi9U0q258r_6_KvD/view?usp=drive_link"
  },
  {
    title: "Welding Job No. 1",
    category: "MP LAB Drawing Tutorials",
    link: "https://drive.google.com/file/d/1vY0QtXXD3P8gOzddyOTxXi62lKITTcSC/view?usp=sharing"
  },
  {
    title: "Welding Job No. 2",
    category: "MP LAB Drawing Tutorials",
    link: "https://drive.google.com/file/d/1TQQwmD4ojnp8PVbL2RzNsB0XQZJWIgnv/view?usp=sharing"
  },
  {
    title: "BASIC ELECTRONICS(MOD 1)",
    category: "Basic Electronics",
    notes: "BE MOD-1 notes-Contributed by ANJALI BHARTI",
    link: "https://drive.google.com/open?id=1vz4UJDuC-ms9m7ijnjFkgDw5rdaDRYMj"
  },
  {
    title: "BASIC ELECTRICAL(MOD 1-4)",
    category: "Basic Electrical",
    notes: "Deepak sir notes-Contributed by ANJALI BHARTI",
    link: "https://drive.google.com/open?id=1FkHmFXrZ3jAlvk62c64hdvIxd7ShkfQL"
  },
  {
    title: "ED Introduction",
    category: "ED",
    notes: "Uploaded by ANJALI BHARTI",
    link: "https://drive.google.com/open?id=1m25MpK7bjty36TBkuK-IZ1vpFMq0dcIr"
  },
  {
    title: "Ed graphics",
    category: "ED",
    notes: "Uploaded by ANJALI BHARTI",
    link: "https://drive.google.com/open?id=19QyqunyR28QUO5J_qk30m_DEWg76U_C1"
  },
  {
    title: "Ed curves",
    category: "ED",
    notes: "Uploaded by ANJALI BHARTI",
    link: "https://drive.google.com/open?id=1Y9xtzdYayHb8c9WKHakfSyCA8yf8U0Fw"
  },
  {
    title: "Chemistry",
    category: "Chemistry",
    notes: "Notes by Manoranjan sir-Contributed by ANJALI BHARTI",
    status: "New",
    link: "https://drive.google.com/file/d/1n0cPScMZBuziiuvTsyYI7Y3BVFkKWn44/view?usp=sharing"
  },
  {
    title: "Chemistry handwritten notes",
    category: "Chemistry",
    notes: "-Contributed by ANJALI BHARTI",
    link: "https://drive.google.com/file/d/1AMbf4HJV2hq-CFjqexZcW2HRgKQnRR6V/view?usp=sharing"
  },
  {
    title: "MP LAB RECORD",
    category: "MP LAB",
    notes: "Complete mp written record-Contributed by ANJALI BHARTI",
    status: "Show",
    link: "https://drive.google.com/open?id=130DnOu_kIu1HIMm4k10h8hNhkMdrpV0c"
  },
  {
    title: "ENV(All Modules)",
    category: "ENV",
    notes: "Environmental notes-Contributed by ANJALI BHARTI",
    status: "Hot",
    link: "https://drive.google.com/open?id=1vz4UJDuC-ms9m7ijnjFkgDw5rdaDRYMj"
  },

  { name: "Chemistry (MOD 1-5) Ebook by Manoranjan Sir", category: "Chemistry", description: "Notes by Manoranjan sir", availability: "New", link: "https://drive.google.com/file/d/1n0cPScMZBuziiuvTsyYI7Y3BVFkKWn44/view?usp=sharing" },
  { name: "Swaroopa Mam Notes (MOD1--5)", category: "Maths2", description: "Maths2 notes", availability: "Show", link: "https://drive.google.com/file/d/13UcCPA_-pqfOHqiFkIkplZ2acuAIrIz6/view?usp=sharing" },
  { name: "Maths 1 notes", category: "Maths1", description: "Maths 1 complete notes", availability: "Show", link: "https://drive.google.com/open?id=15tbUJ_OmkaN8Mr-KzvYYp074CsOQgf6s" },
  { name: "Miller Freunds probability and statistics for engineers, John E.Johnson, Richard Arnold Miller", category: "Ebooks", description: "Ebooks by Miller", availability: "Show", link: "https://drive.google.com/file/d/1OcuiRm7gC55zpi36Nn0pLbePucipEsID/view?usp=drive_link" },
  { name: "Physics Ebook", category: "Ebooks", description: "Physics Ebook", availability: "New", link: "https://drive.google.com/file/d/1_BOHPHgAhdOqKt9tQVeUMqLfbd67UtD_/view?usp=sharing" },
  { name: "Physics Ebook (MOD 1-5)", category: "Physics", description: "Physics Ebook (MOD 1-5)", availability: "New", link: "https://drive.google.com/file/d/1_BOHPHgAhdOqKt9tQVeUMqLfbd67UtD_/view?usp=sharing" },
  { name: "Quick Sort", category: "DSA", description: "DSA codes by Samaleswari Sir", availability: "New", link: "https://alokrajcse.github.io/quicksort.io/" },
  { name: "Heap Sort", category: "DSA", description: "DSA codes by Samaleswari Sir", availability: "New", link: "https://drive.google.com/file/d/1Xhtmqu1nPqyVazaM8-Ix9kzlluaKwo-O/view?usp=drive_link" },
  { name: "Circular Linked List", category: "DSA", description: "DSA codes by Samaleswari Sir", availability: "Show", link: "https://alokrajcse.github.io/CircularLinkedList.io/" },
  { name: "Double Linked List", category: "DSA", description: "DSA codes by Samaleswari Sir", availability: "Show", link: "https://alokrajcse.github.io/DoubleLinkedList.io/" },
  { name: "Single Linked List", category: "DSA", description: "DSA codes by Samaleswari Sir", availability: "Show", link: "https://alokrajcse.github.io/SingleLinkedList.io/" },
  { name: "Queue Using Single Linked List", category: "DSA", description: "DSA codes by Samaleswari Sir", availability: "Show", link: "https://alokrajcse.github.io/QueueUsingLinkedList.io/" },
  { name: "Infix to Postfix", category: "DSA", description: "DSA codes by Samaleswari Sir", availability: "Show", link: "https://alokrajcse.github.io/infixtopostfix.io/" },
  { name: "Stack Using Linked List", category: "DSA", description: "DSA codes by Samaleswari Sir", availability: "Show", link: "https://alokrajcse.github.io/StackUsingLinkedList.io/" },
  { name: "Postfix Evaluation", category: "DSA", description: "DSA codes by Samaleswari Sir", availability: "Show", link: "https://alokrajcse.github.io/PostfixEvaluation.io/" },
  { name: "Transpose of Sparse Matrix", category: "DSA", description: "DSA codes by Samaleswari Sir", availability: "Show", link: "https://alokrajcse.github.io/SparseTranspose.io/" },
  { name: "Sparse to Column Triplet", category: "DSA", description: "DSA codes by Samaleswari Sir", availability: "Show", link: "https://alokrajcse.github.io/SparseColumn.io/" },
  { name: "Sparse to Row Triplet", category: "DSA", description: "DSA codes by Samaleswari Sir", availability: "Show", link: "https://alokrajcse.github.io/Sparse.io/" },
  { name: "Basic Electrical MOD 5", category: "Basic Electrical", description: "Basic Electrical MOD 5", availability: "Show", link: "https://drive.google.com/open?id=1ZdZdR3NX5NyYF4a79-0kjihkukR6qzwD" },
  { name: "On Umbrella Morals", category: "CTE", description: "On Umbrella Morals CTE Texts", availability: "Show", link: "https://drive.google.com/file/d/1G59D2MUZ3oB5EMkzvaI2j55vMdJeZrtq/view?usp=drive_link" },
  { name: "Long Walk to Freedom", category: "CTE", description: "Long Walk to Freedom CTE Texts", availability: "Show", link: "https://drive.google.com/file/d/1G37lUDVNR4GTgijNrzWZqmR2egjtbaIT/view?usp=drive_link" },
  { name: "A Snake in the Grass", category: "CTE", description: "A Snake in the Grass CTE Texts", availability: "Show", link: "https://drive.google.com/file/d/1G54Rh-oEgzqD1DSlC3-PaOimI0NY-yE5/view?usp=drive_link" },
  { name: "Machining Job No. 2", category: "MP LAB Drawing Tutorials", description: "Machining Job No. 2 MP LAB Drawing Tutorials", availability: "Show", link: "https://driveplyr.sh20raj.repl.co/plyr.html?id=eyJpZCI6WyIxdWNoNmRUYmtWT09fMXhVeGlnbkdSTkNPR1k2cVdiY2siXX0=" },
];

function createEbookCard(ebook) {
  const { name, category, description, availability, link } = ebook;
  const thumbnail = "thumbnail_placeholder.png"; // Use actual thumbnail image URL here

  const ebookCard = document.createElement("a");
  ebookCard.href = `product.html?name=${encodeURIComponent(name)}&category=${encodeURIComponent(category)}&description=${encodeURIComponent(description)}&availability=${encodeURIComponent(availability)}&thumbnail=${encodeURIComponent(thumbnail)}`;
  ebookCard.classList.add("ebook-card");
  ebookCard.innerHTML = `
    <img src="ebook.png" alt="${name} Thumbnail">
    <h3>${name}</h3>
  `;
  ebookCard.addEventListener("click", (event) => {
    event.preventDefault();
    showModal(ebook);
  });

  return ebookCard;
}

function renderEbooks(ebooksArray) {
  const ebookGrid = document.getElementById("ebook-grid");
  ebookGrid.innerHTML = "";

  ebooksArray.forEach((ebook) => {
    const ebookCard = createEbookCard(ebook);
    ebookGrid.appendChild(ebookCard);
  });
}

function filterByCategory(category) {
  if (category === "All") {
    renderEbooks(ebooks);
  } else {
    const filteredEbooks = ebooks.filter((ebook) => ebook.category === category);
    renderEbooks(filteredEbooks);
  }
}

function searchEbooks() {
  const searchTerm = searchInput.value.toLowerCase();
  const filteredEbooks = ebooks.filter(
    (ebook) =>
      ebook.name.toLowerCase().includes(searchTerm) ||
      ebook.category.toLowerCase().includes(searchTerm) ||
      ebook.description.toLowerCase().includes(searchTerm) ||
      ebook.availability.toLowerCase().includes(searchTerm)
  );
  renderEbooks(filteredEbooks);
}

function showModal(ebook) {
  const { name, category, description, availability, link } = ebook;

  document.getElementById("modal-name").innerText = name;
  document.getElementById("modal-category").innerText = category;
  document.getElementById("modal-description").innerText = description;
  document.getElementById("modal-availability").innerText = availability;
  document.getElementById("modal-link").href = link;

  const modal = document.getElementById("modal");
  modal.style.display = "block";
}

function closeModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "none";
}

const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("input", searchEbooks);

renderEbooks(ebooks);
