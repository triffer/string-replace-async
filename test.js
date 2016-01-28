import test from 'ava';
import fn from './';

test('replace with global flag', t => {
	const string = 'hellololo';

	const replacer = () => new Promise(resolve => {
		setTimeout(() => resolve('la'), 10);
	});

	return fn(string, /lo/g, replacer)
		.then(res => {
			t.is(res, 'hellalala');
		});
});

test('replace without global flag', t => {
	const string = 'hellololo';

	const replacer = () => new Promise(resolve => {
		setTimeout(() => resolve('la'), 10);
	});

	return fn(string, /lo/, replacer)
		.then(res => {
			t.is(res, 'hellalolo');
		});
});

test('macth by a string', t => {
	const string = 'hellololo';

	const replacer = () => new Promise(resolve => {
		setTimeout(() => resolve('la'), 10);
	});

	return fn(string, 'lo', replacer)
		.then(res => {
			t.is(res, 'hellalolo');
		});
});

test('string as a replacer', t => {
	const string = 'hellololo';

	return fn(string, /lo/g, 'la')
		.then(res => {
			t.is(res, 'hellalala');
		});
});
