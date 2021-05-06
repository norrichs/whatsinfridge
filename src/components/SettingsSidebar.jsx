import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const SettingsSidebar = () => {
	return (
		<aside className="settings-sidebar">
			<diet>
				<button>vegan</button>
				<button>ovo-vegetarian</button>
				<button>lacto-vegetarian</button>
			</diet>
		</aside>
	);
};
