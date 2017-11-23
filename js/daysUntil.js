/* ===== Edit Function ===== */

function daysUntil(date) {

	var nextYear = moment().add(1, 'years').get('year');
	var birthday = moment(date).set('year', nextYear);
	var today = moment().format('YYYY-MM-DD');
	var diffDays = birthday.diff(today, 'days');

	if (diffDays === 365) {
		return 'cake';
    } else {
    	return birthday.diff(today, 'days');
   	}

  return null;
}

/* ===== End Function ===== */