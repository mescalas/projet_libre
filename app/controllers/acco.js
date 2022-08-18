const axios = require('axios');

const getAccoList = (req, res) => {
	const {PISTEToken} = req.tokens;
	const {pagination, pageNumber} = req.params;
	axios.post('https://sandbox-api.piste.gouv.fr/dila/legifrance-beta/lf-engine-app/search', {
		fond: 'ACCO',
		recherche: {
			champs: [],
			operateurs: [],
			pageNumber,
			pageSize: pagination,
			sort: 'SIGNATURE_DATE_DESC',
			typePagination: 'DEFAUT',
		},
	}, {
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json',
			Authorization: `Bearer ${PISTEToken.access_token}`,
		},
	})
		.then(response => res.status(200).json(response.data))
		.catch(error => res.status(500).json(error));
};

const getAcco = (req, res) => {
	const {PISTEToken} = req.tokens;
	const accoId = req.params.id;
	axios.post('https://sandbox-api.piste.gouv.fr/dila/legifrance-beta/lf-engine-app/consult/acco', {
		id: accoId,
	}, {
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json',
			Authorization: `Bearer ${PISTEToken.access_token}`,
		},
	})
		.then(response => res.status(200).json(response.data))
		.catch(error => res.status(500).json(error));
};

const getCompany = (req, res) => {
	const {INSEEToken} = req.tokens;
	const companySiret = req.params.siret;

	axios.get(`https://api.insee.fr/entreprises/sirene/V3/siret/${companySiret}`, {
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json',
			Authorization: `Bearer ${INSEEToken.access_token}`,
		},
	})
		.then(response => res.status(200).json(response.data))
		.catch(error => res.status(500).json(error));
};

module.exports = {getAccoList, getAcco, getCompany};
