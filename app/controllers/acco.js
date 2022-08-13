const axios = require('axios');

const getAccoList = (req, res) => {
	axios.post('https://sandbox-api.piste.gouv.fr/dila/legifrance-beta/lf-engine-app/search', {
		fond: 'ACCO',
		recherche: {
			champs: [],
			operateurs: [],
			pageNumber: 1,
			pageSize: 5,
			sort: 'SIGNATURE_DATE_DESC',
			typePagination: 'DEFAUT',
		},
	}, {
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json',
			Authorization: 'Bearer yyv4Q7bk4v7eMQ1JUXJWaw5OYekdX1F5y0E4uV0BCMjFKRH3aqmwjN',
		},
	})
		.then(response => res.status(200).json(response.data))
		.catch(error => res.status(500).json(error));
};

const getAcco = (req, res) => {
	axios.post('https://sandbox-api.piste.gouv.fr/dila/legifrance-beta/lf-engine-app/consult/acco', {
		id: 'ACCOTEXT000042016734',
	}, {
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json',
			Authorization: 'Bearer yyv4Q7bk4v7eMQ1JUXJWaw5OYekdX1F5y0E4uV0BCMjFKRH3aqmwjN',
		},
	})
		.then(response => res.status(200).json(response.data))
		.catch(error => res.status(500).json(error));
};

const getCompany = (req, res) => {
	const companySiret = req.params.siret;

	axios.get(`https://api.insee.fr/entreprises/sirene/V3/siret/${companySiret}`, {
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json',
			Authorization: 'Bearer c1a325f3-be9c-30aa-b108-1883f7c910c4',
		},
	})
		.then(response => res.status(200).json(response.data))
		.catch(error => res.status(500).json(error));
};

module.exports = {getAccoList, getAcco, getCompany};
