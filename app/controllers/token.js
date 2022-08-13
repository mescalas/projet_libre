/* eslint-disable camelcase */
const axios = require('axios');

const INSEEToken = (req, res) => {
	axios.post('https://api.insee.fr/token',
		new URLSearchParams({
			grant_type: 'client_credentials',
		}),
		{
			headers: {
				Authorization: 'Basic NUZFMnMyRjAxcW9HbFdHUTE4WnVmdjZISUJRYTpmZkdnTGhPdnQ2VkVmU012Y1dOWXZtMjRUN0lh',
			},
		})
		.then(response => res.status(200).json(response.data))
		.catch(error => res.status(500).json(error));
};

const PISTEToken = (req, res) => {
	axios.post('https://sandbox-oauth.piste.gouv.fr/api/oauth/token',
		new URLSearchParams({
			grant_type: 'client_credentials',
			client_id: '4114194b-0999-41e8-af9e-9e38e71eb644',
			client_secret: '146366d0-2386-4b16-a5d3-2b606742ee7b',
		}),
		{
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
			},
		})
		.then(response => res.status(200).json(response.data))
		.catch(error => res.status(500).json(error));
};

module.exports = {INSEEToken, PISTEToken};
