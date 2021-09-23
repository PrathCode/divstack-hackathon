<?php include 'includes/header.php';?>


<div>
            <div class="contactMainDiv">
                <div style="text-align: center">
                    <img src="public/images/contact.png"/>
                </div>

                <div style="padding: 2% 15%">
                    <form method="POST" class="contact-form">
                        <div class="row">
                            <div class="col-md-6">
                                Full name:
                                <input type="text" aria-required="true" aria-invalid="false" placeholder="Full name" required></input>
                            </div>
                            <div class="col-md-6">
                                Email:
                                <input type="email" aria-required="true" aria-invalid="false" placeholder="Email address" required></input>
                            </div>
                            <div class="col-md-6">
                                For:
                                <select required>
                                    <option>---</option>
                                    <option>Html 5</option>
                                    <option>CSS 3</option>
                                    <option>JS</option>
                                </select>
                            </div>
                            <div class="col-md-6">
                                Purpose:
                                <select required>
                                    <option>---</option>
                                    <option>Query</option>
                                    <option>Suggestion</option>
                                </select>
                            </div>
                            <div class="col-md-12">
                                Your Answer:
                                <textarea aria-required="true" cols="40" rows="7" aria-invalid="false" placeholder="Answer" required></textarea>
                            </div>
                            <div class="col-md-12">
                                <div class="g-recaptcha" data-sitekey="6LdVc7gbAAAAAFgrXGPDUafhq1RhtlXoGdXyk5Kc"></div>
                            </div>
                            <div class="col-md-12" style="padding-top: 2%">
                                <button type="button" class="btn btn-secondary">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>



<?php include 'includes/footer.php';?>