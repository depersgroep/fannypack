+++
title = "Login"
date = 2017-10-23T09:19:17+02:00
description = "example of the Login page"
type = "templates"
layout = "login"
modifiers = ["layout--diorama"]
[menu.docs]
parent = "Templates"
+++

```html
<!DOCTYPE html>
<html lang="en" class="no-js layout--diorama">
<head>...</head>
<body style="background-image: url('img/antelopecanyon.jpg');" data-copyright="Unsplash" data-credit="Ashim D’Silva">
	<main class="main-container" role="main">
			<div class="app-icon app-icon--xlarge app-icon--lumberjack-red" role="img" aria-labelledby="app-icon-name">
				<div class="app-icon__logo" aria-hidden="true">
					<span class="app-icon__character">T</span>
					<span class="app-icon__character">E</span>
				</div>
				<span class="app-icon__name" id="app-icon-name">Temptation Editor</span>
			</div>
			<p>Sign in below with your De Persgroep account.</p>
			<form action="" class="form">
				<div class="form__group">
					<label for="name" class="form__label">Name</label>
					<input id="name" name="name" type="text" class="form__field" required="required" />
				</div>
				<div class="form__group">
					<label for="password" class="form__label">Password</label>
					<input id="password" name="password" type="password" class="form__field" required="required" />
				</div>
				<div class="form__group">
					<div class="form__checkbox">
						<label class="form__checkbox__label">
							<input type="checkbox" class="form__checkbox__input" value="rememberme" />Remember me
						</label>
					</div>
				</div>
				<div class="form__actions">
					<button class="button button--primary" type="submit">Login</button>
				</div>
				<div><a href="#">Forgot password</a></div>
			</form>
			<footer class="footer">
				Experiencing problems or in need of assistance? Get in touch with <a href="mailto:servicedesk@somecompany.com">ServiceDesk</a>.
			</footer>
	</main>
</body>
</html>
```
