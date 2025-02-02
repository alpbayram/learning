
do {
	const para = document.createElement("p")
	if (i == 10) {
		para.textContent = `Countdown ${i}`
	} else if (i == 0) {
		para.textContent = `Blast off!`
	} else {
		para.textContent = `${i}`
	}
	output.appendChild(para)
	i--
} while (i >= 0)

	const people = ["Chris", "Anne", "Colin", "Terri", "Phil", "Lola", "Sam", "Kay", "Bruce"]

	const admitted = document.querySelector(".admitted")
	const refused = document.querySelector(".refused")
	let admittedText = ""
	let refusedText = ""
	for (let person of people) {
		if (person == "Phil" || person == "Lola") {
			refusedText += person + ", "
		} else {
			admittedText = person + ", " + admittedText
		}
	}
	let sonText = refusedText.slice(0, -2)+"."
	let sonText2 = admittedText.slice(0, -2)+"."
	admitted.textContent = "Admit: " + sonText2
	refused.textContent = "Refuse: " + sonText
    