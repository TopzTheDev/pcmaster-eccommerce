import React, { Fragment } from 'react';
import InputAdornment from '@material-ui/core/InputAdornment';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import ProductListItem from './ProductListItem';

const useStyles = makeStyles(theme => ({
	input: {
		display: 'flex',
		flex: 1,
		width: '300px'
	}
}));

const ModalList = ({ data, onDelete, title }) => {
	const classes = useStyles();
	const onChange = e => {};
	return (
		<List dense={false}>
			<Grid container align={'center'} style={{ margin: '10px 0' }}>
				<Grid item>
					<h2>{title} List</h2>
				</Grid>
				<Grid item container justify={'flex-end'}>
					<div className={classes.input}>
						<TextField
							fullWidth
							name={'category'}
							value={'hello'}
							label={`Search ${title}`}
							className={classes.input}
							onChange={onChange}
							InputProps={{
								endAdornment: (
									<InputAdornment position='end'>
										<IconButton onClick={() => {}} aria-label='delete'>
											<SearchIcon />
										</IconButton>
									</InputAdornment>
								)
							}}
						/>
					</div>
				</Grid>
			</Grid>
			{data != null &&
				data.map((item, idx) => (
					<Fragment>
						<ProductListItem
							key={item._id || idx}
							data={item}
							onDelete={onDelete}
						/>
						<Divider />
					</Fragment>
				))}
		</List>
	);
};

export default ModalList;
