
export const fetchConversationList = () => {
	return new Promise((resolve, reject) => {
		fetch("https://sec.meetkaruna.com/api/v1/conversations")
			.then(res => res.json())
			.then(data => resolve(data.data))
			.catch(error => reject(error))
	});
}

export const fetchConversation = id => {
	return new Promise((resolve, reject) => {
		fetch(`https://sec.meetkaruna.com/api/v1/conversations/${id}`)
			.then(res => res.json())
			.then(data => resolve(data.data))
			.catch(error => reject(error))
	})
}