<div className={styles.selectorWrapper}>
	<button type="button" className={cn(styles.selector, {
		[styles.selectorActive]: selector2Status === true
	})} onClick={() => {
		setSelector2Status(!selector2Status)
	}}>
		{variant2}
		<Arrow position={selector2Status ? 'up' : 'down'} />
	</button>

	{selector2Status && (
		<div className={styles.selectorList2}>
			<button type="button" className={styles.selectorItem} onClick={() => {
				setVariant2('У вас на площадке')
				setSelector2Status(false)
			}}>
				У вас на площадке
			</button>
			<button type="button" className={styles.selectorItem} onClick={() => {
				setVariant2('В нашем банкет-холле')
				setSelector2Status(false)
			}}>
				в нашем банкет-холле
			</button>
		</div>
	)}

</div>