'use strict';

/* docs.js — help, about, contact and legal pages of Qalcurate MOBILE (12/11/2026).
   German is the binding version of the legal texts; English is a courtesy translation.
   Rendered into #view-doc by app.js (openDoc). Plain HTML strings, no external requests. */

const APP_VERSION = '1.1.0';
const DOCS_AS_OF = { de: '12.11.2026', en: '12 November 2026' };

const PROVIDER = {
  name: 'Value4p GmbH',
  street: 'Schulstr. 27',
  city: '26759 Hinte',
  country: { de: 'Deutschland', en: 'Germany' },
  rep: 'Roland Jungenkrüger',
  phone: '+49 (0) 1520 4625308',
  phoneHref: '+4915204625308',
  email: 'info@value4p.com',
  register: 'HRB 206940',
  court: { de: 'Amtsgericht Aurich', en: 'Local Court (Amtsgericht) Aurich' },
  vat: 'DE346727788',
};

const providerBlock = (l) => `<p>${PROVIDER.name}<br>${PROVIDER.street}<br>${PROVIDER.city}<br>${PROVIDER.country[l]}</p>`;
const contactBlock = (l) =>
  `<p>${l === 'de' ? 'Telefon' : 'Phone'}: <a href="tel:${PROVIDER.phoneHref}">${PROVIDER.phone}</a><br>${l === 'de' ? 'E-Mail' : 'Email'}: <a href="mailto:${PROVIDER.email}">${PROVIDER.email}</a></p>`;
const docLink = (key, label) => `<a href="#" data-doc-link="${key}">${label}</a>`;
const asOf = (l) => `<p class="doc-meta">${l === 'de' ? 'Stand' : 'As of'}: ${DOCS_AS_OF[l]} · ${l === 'de' ? 'Version' : 'Version'} ${APP_VERSION}</p>`;
const enNote = '<p class="doc-note">This is a courtesy translation. Only the German version is legally binding.</p>';

const DOCS = {
  de: {
    /* ------------------------------------------------------------------ HELP */
    help: {
      title: 'Hilfe',
      html: () => `
<p>Hier findest Du alles zur Einrichtung und Bedienung von Qalcurate MOBILE. Tippe auf ein Thema, um es zu öffnen.</p>

<details class="doc-acc" open><summary>Auf dem iPhone einrichten</summary>
<ol>
<li>Öffne <strong>qmob.qalcurate.com</strong> in <strong>Safari</strong>.</li>
<li>Tippe unten auf das <strong>Teilen-Symbol</strong> (Quadrat mit Pfeil nach oben).</li>
<li>Wähle <strong>„Zum Home-Bildschirm“</strong> und tippe auf <strong>„Hinzufügen“</strong>.</li>
<li>Starte die App ab jetzt immer über das Symbol auf dem Home-Bildschirm. Nur so bleibt der Bildschirm während einer Aufnahme an.</li>
<li>Erlaube beim ersten Start den Zugriff auf das <strong>Mikrofon</strong>.</li>
</ol>
<p>Hast Du den Zugriff versehentlich abgelehnt? Öffne die iPhone-Einstellungen, dann <strong>Apps › Safari › Mikrofon</strong>, und wähle „Fragen“ oder „Erlauben“.</p>
</details>

<details class="doc-acc"><summary>Auf Android einrichten</summary>
<ol>
<li>Öffne <strong>qmob.qalcurate.com</strong> in <strong>Chrome</strong>.</li>
<li>Tippe oben rechts auf das <strong>Menü (⋮)</strong>.</li>
<li>Wähle <strong>„App installieren“</strong> oder <strong>„Zum Startbildschirm hinzufügen“</strong>.</li>
<li>Starte die App über das neue Symbol und erlaube den Zugriff auf das Mikrofon.</li>
</ol>
</details>

<details class="doc-acc"><summary>Mit Qalcurate verbinden</summary>
<p>Ohne Verbindung bleiben alle Aufnahmen nur auf Deinem Gerät. Mit einer Verbindung wird jede fertige Aufnahme ein eigener Chat bei einem Deiner Qalvy-Agenten.</p>
<ol>
<li>Melde Dich bei Qalcurate an und öffne über Dein Benutzermenü <strong>Einstellungen › Mein Konto</strong>.</li>
<li>Tippe unter <strong>Verbindungen</strong> bei <strong>Qalcurate MOBILE</strong> auf <strong>„Einrichten“</strong>, gib Deinen Qalvy-Schlüssel ein und wähle den Agenten.</li>
<li>Kopiere die angezeigte <strong>Webhook-Adresse</strong>.</li>
<li>Füge sie hier in der App unter <strong>Einstellungen › Webhook-URL</strong> ein, tippe auf <strong>„Speichern“</strong> und dann auf <strong>„Verbindung testen“</strong>.</li>
</ol>
<p>Der Chat in Qalvy heißt dann zum Beispiel <em>12.11.2026-14:34-Baustelle Emden</em>. Ohne Titel steht dort „Gespräch“.</p>
</details>

<details class="doc-acc"><summary>Aufnehmen</summary>
<ol>
<li>Gib bei Bedarf einen <strong>Titel</strong> ein und wähle die <strong>Sprache</strong> des Gesprächs.</li>
<li>Tippe auf das <strong>Mikrofon</strong>.</li>
<li>Bestätige, dass <strong>alle Beteiligten der Aufnahme zugestimmt</strong> haben. Ohne diese Bestätigung startet keine Aufnahme.</li>
<li>Während der Aufnahme siehst Du das Transkript live.</li>
<li>Tippe erneut auf das Mikrofon, um die Aufnahme zu beenden. Nach <strong>20 Sekunden Stille</strong> endet sie automatisch.</li>
</ol>
<p>Fertige Aufnahmen findest Du unter <strong>Verlauf</strong>. Dort siehst Du auch, ob sie schon übermittelt wurden.</p>
</details>

<details class="doc-acc"><summary>Bildschirmsperre und Hintergrund</summary>
<ul>
<li>Während einer Aufnahme bleibt der Bildschirm an, wenn Du die App vom Home-Bildschirm gestartet hast (iPhone ab iOS 18.4).</li>
<li>Wird der Bildschirm trotzdem dunkel, läuft die Aufnahme weiter. Oben in der Statusleiste erscheint ein <strong>Mikrofonsymbol</strong>. Tippst Du darauf, kommst Du nach dem Entsperren direkt zurück in die App.</li>
<li>Sperrst Du das iPhone mit der <strong>Seitentaste</strong> oder wechselst Du in eine andere App, beendet iOS die Aufnahme. Alles bis dahin Aufgenommene wird gespeichert.</li>
<li>Eine Anzeige mit Stopp-Knopf direkt auf dem Sperrbildschirm ist mit einer Web-App technisch nicht möglich.</li>
</ul>
</details>

<details class="doc-acc"><summary>Ohne Internet aufnehmen</summary>
<p>Aufnahmen funktionieren auch ohne Netz. Die App speichert sie auf Deinem Gerät und übermittelt sie automatisch, sobald wieder eine Verbindung besteht. Unter <strong>Einstellungen › Warteschlange</strong> siehst Du, wie viele Aufnahmen noch ausstehen.</p>
<p>Die Live-Transkription braucht in der Regel eine Internetverbindung, weil die Spracherkennung Deines Geräts dafür Server von Apple oder Google nutzt.</p>
</details>

<details class="doc-acc"><summary>Updates</summary>
<p>Die App aktualisiert sich selbst. Schließe sie und öffne sie neu, dann lädt sie die aktuelle Version. Die Version steht unter <strong>Einstellungen › Über Qalcurate MOBILE</strong>.</p>
</details>

<details class="doc-acc"><summary>Wenn etwas nicht klappt</summary>
<ul>
<li><strong>Kein Transkript:</strong> Prüfe in den iPhone-Einstellungen unter <strong>Allgemein › Tastatur</strong>, ob die <strong>Diktierfunktion</strong> eingeschaltet ist, und ob Du online bist.</li>
<li><strong>„Verbindung testen“ schlägt fehl:</strong> Prüfe, ob die Webhook-Adresse vollständig eingefügt ist. Die Verbindung in Qalcurate muss noch bestehen.</li>
<li><strong>Kein Mikrofon:</strong> Erlaube den Zugriff wie unter „Auf dem iPhone einrichten“ beschrieben.</li>
<li>Hilft das nicht weiter, schreib uns über ${docLink('contact', 'Kontakt und Feedback')}.</li>
</ul>
</details>

<details class="doc-acc"><summary>Daten löschen</summary>
<ul>
<li>Einzelne Aufnahmen löschst Du im <strong>Verlauf</strong>, alle auf einmal mit <strong>„Alle löschen“</strong>.</li>
<li>Unter <strong>Einstellungen › Lokale Daten löschen</strong> entfernst Du alle Aufnahmen und Einstellungen von diesem Gerät.</li>
<li>Entfernst Du die App vom Home-Bildschirm, löscht iOS auch ihre Daten.</li>
<li>Bereits an Qalvy übergebene Chats löschst Du in Qalvy.</li>
</ul>
</details>`,
    },

    /* ----------------------------------------------------------------- ABOUT */
    about: {
      title: 'Über Qalcurate MOBILE',
      html: () => `
<h2>Qalcurate MOBILE</h2>
<p>Qalcurate MOBILE ist die mobile App von Qalcurate. Du nimmst Gespräche auf, siehst das Transkript live und gibst die Aufnahme auf Wunsch direkt an einen Qalvy-Agenten weiter. Aus jeder Aufnahme wird dort ein eigener Chat, mit dem Du weiterarbeiten kannst.</p>
<ul>
<li>Funktioniert auch offline; Aufnahmen werden später automatisch übermittelt.</li>
<li>Keine Anmeldung in der App, keine Cookies, kein Tracking.</li>
<li>Installierbar auf iPhone und Android, ohne App Store.</li>
</ul>

<h2>Qalcurate</h2>
<p>Qalcurate ist die KI-Plattform der Value4p GmbH für Unternehmen. Sie verbindet fachliche Lösungen, die <strong>Qalcurate Solutions</strong>, mit <strong>Qalvy</strong>, dem KI-Assistenten mit eigenen Agenten.</p>
<p>Zu den Qalcurate Solutions gehören zum Beispiel die Bewertung von Klimarisiken, Predictive Maintenance und ein KI-Managementsystem. Alle Lösungen nutzen dieselbe Oberfläche, dieselbe Anmeldung und dieselbe Rechteverwaltung. Die Plattform wird in Deutschland betrieben.</p>
<p>Mehr erfährst Du auf <a href="https://qalcurate.com" target="_blank" rel="noopener">qalcurate.com</a>.</p>

<h2>Anbieter</h2>
${providerBlock('de')}
<p>${docLink('contact', 'Kontakt und Feedback')} · ${docLink('imprint', 'Impressum')} · ${docLink('privacy', 'Datenschutz')} · ${docLink('terms', 'Nutzungsbedingungen')}</p>

<h2>Lizenzen</h2>
<p>Schrift: Inter von Rasmus Andersson, SIL Open Font License 1.1.</p>
${asOf('de')}`,
    },

    /* --------------------------------------------------------------- CONTACT */
    contact: {
      title: 'Kontakt und Feedback',
      html: () => `
<p>Hast Du eine Frage, einen Fehler gefunden oder eine Idee? Wir freuen uns über jede Rückmeldung.</p>
<form class="doc-form" id="feedbackForm" novalidate>
  <div class="field-group">
    <label for="fbType">Worum geht es?</label>
    <select class="field-input" id="fbType" data-testid="select-feedback-type">
      <option value="Feedback">Feedback oder Idee</option>
      <option value="Fehler">Fehler melden</option>
      <option value="Frage">Frage</option>
    </select>
  </div>
  <div class="field-group">
    <label for="fbText">Deine Nachricht</label>
    <textarea class="field-input" id="fbText" rows="5" maxlength="3000" placeholder="Was ist Dir aufgefallen?" data-testid="input-feedback-text"></textarea>
  </div>
  <label class="doc-check"><input type="checkbox" id="fbTech" checked data-testid="checkbox-feedback-tech"> Technische Angaben anhängen (App-Version, Gerät, Browser, Sprache). Aufnahmen und Webhook-Adresse werden nicht angehängt.</label>
  <button type="submit" class="btn btn-primary" data-testid="button-feedback-send">E-Mail vorbereiten</button>
  <p class="field-hint">Es öffnet sich Dein E-Mail-Programm mit der vorbereiteten Nachricht. Gesendet wird erst, wenn Du dort auf „Senden“ tippst.</p>
</form>

<h2>Direkter Kontakt</h2>
${providerBlock('de')}
${contactBlock('de')}
<p>Hinweise zur Verarbeitung Deiner Nachricht findest Du im ${docLink('privacy', 'Datenschutzhinweis')}.</p>`,
    },

    /* --------------------------------------------------------------- IMPRINT */
    imprint: {
      title: 'Impressum',
      html: () => `
<h2>Angaben gemäß § 5 DDG</h2>
${providerBlock('de')}
<p>Vertreten durch den Geschäftsführer: ${PROVIDER.rep}</p>

<h2>Kontakt</h2>
${contactBlock('de')}

<h2>Registereintrag</h2>
<p>Registergericht: ${PROVIDER.court.de}<br>Registernummer: ${PROVIDER.register}</p>

<h2>Umsatzsteuer</h2>
<p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz: ${PROVIDER.vat}</p>

<h2>Verantwortlich für den Inhalt</h2>
<p>${PROVIDER.rep}, ${PROVIDER.name}, ${PROVIDER.street}, ${PROVIDER.city}</p>

<h2>Verbraucherstreitbeilegung</h2>
<p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
${asOf('de')}`,
    },

    /* --------------------------------------------------------------- PRIVACY */
    privacy: {
      title: 'Datenschutzhinweis',
      html: () => `
<p>Dieser Hinweis erklärt, welche personenbezogenen Daten bei der Nutzung von Qalcurate MOBILE unter qmob.qalcurate.com verarbeitet werden. Für die Qalcurate-Plattform und Qalvy gilt zusätzlich deren eigener <a href="https://app.qalcurate.com/legal/datenschutz.html" target="_blank" rel="noopener">Datenschutzhinweis</a>.</p>

<h2>1. Verantwortlicher</h2>
<p>${PROVIDER.name}, ${PROVIDER.street}, ${PROVIDER.city}, vertreten durch ${PROVIDER.rep}<br>E-Mail: <a href="mailto:${PROVIDER.email}">${PROVIDER.email}</a> · Telefon: ${PROVIDER.phone}</p>

<h2>2. Das Wichtigste in Kürze</h2>
<ul>
<li>Die App braucht keine Anmeldung. Wir setzen <strong>keine Cookies</strong> und keine Analyse-, Tracking- oder Werbedienste ein.</li>
<li>Deine Aufnahmen bleiben <strong>auf Deinem Gerät</strong>, solange Du keine Verbindung zu Qalcurate einrichtest.</li>
<li>Die Live-Transkription übernimmt die Spracherkennung Deines Geräts bzw. Browsers (Apple oder Google).</li>
</ul>

<h2>3. Welche Daten verarbeitet werden</h2>
<div class="doc-table"><table>
<thead><tr><th>Vorgang</th><th>Daten</th><th>Zweck und Rechtsgrundlage</th><th>Speicherdauer</th></tr></thead>
<tbody>
<tr><td>Aufruf der App</td><td>IP-Adresse, Datum und Uhrzeit, aufgerufene Adresse, Browser und Betriebssystem (Server-Protokolle)</td><td>Bereitstellung, Stabilität und Sicherheit; Art. 6 Abs. 1 lit. f DSGVO</td><td>Spätestens nach 14 Tagen gelöscht, außer zur Aufklärung eines Sicherheitsvorfalls</td></tr>
<tr><td>Aufnahmen auf dem Gerät</td><td>Audiodatei, Transkript, Titel, Sprache, Beginn, Dauer, Übermittlungsstatus</td><td>Aufnahme und Transkription für Dich; die Daten liegen nur im Speicher Deines Browsers, wir erhalten sie nicht</td><td>Bis Du sie löschst</td></tr>
<tr><td>Spracherkennung</td><td>Sprachaufnahme während der Aufnahme</td><td>Live-Transkript über die Spracherkennung Deines Geräts bzw. Browsers (siehe Abschnitt 5)</td><td>Nach den Bedingungen von Apple bzw. Google</td></tr>
<tr><td>Übermittlung an Qalcurate (nur mit eingerichteter Verbindung)</td><td>Titel, Beginn, Dauer, Transkript, Aufnahme-Kennung; die Audiodatei wird mitgesendet, aber sofort verworfen und nicht gespeichert</td><td>Weitergabe an den von Dir gewählten Qalvy-Agenten, der daraus einen Chat in Deinem Qalvy-Konto anlegt; Art. 6 Abs. 1 lit. b DSGVO</td><td>Weiterleitung: Kennungen der letzten 300 Aufnahmen (gegen doppelte Zustellung) sowie Zeit, Status und Titel der letzten Übermittlung, bis Du die Verbindung entfernst. Chat in Qalvy: siehe Datenschutzhinweis der Plattform</td></tr>
<tr><td>Einstellungen</td><td>Webhook-Adresse, Sprache der App und der Spracherkennung</td><td>Darstellung und Funktion nach Deiner Wahl; nur lokal auf dem Gerät</td><td>Bis Du sie löschst</td></tr>
<tr><td>Kontakt und Feedback</td><td>Deine E-Mail-Adresse, Deine Nachricht und, wenn Du zustimmst, technische Angaben (App-Version, Gerät, Browser, Sprache)</td><td>Bearbeitung Deiner Anfrage; Art. 6 Abs. 1 lit. f DSGVO, bei Fragen zu einem Vertrag Art. 6 Abs. 1 lit. b DSGVO</td><td>Gelöscht, sobald die Anfrage erledigt ist, außer gesetzliche Aufbewahrungspflichten stehen entgegen</td></tr>
</tbody></table></div>
<p>Wir treffen keine automatisierten Entscheidungen im Sinne von Art. 22 DSGVO und erstellen keine Nutzungsprofile.</p>

<h2>4. Cookies und lokale Speicherung</h2>
<p>Qalcurate MOBILE setzt <strong>keine Cookies</strong>. Damit die App auch offline funktioniert und Deine Aufnahmen und Einstellungen erhalten bleiben, speichert sie Daten im Speicher Deines Browsers:</p>
<div class="doc-table"><table>
<thead><tr><th>Speicher</th><th>Zweck</th><th>Dauer</th></tr></thead>
<tbody>
<tr><td>IndexedDB „qalcurate-db“</td><td>Aufnahmen, Einstellungen, Warteschlange</td><td>Bis zur Löschung durch Dich</td></tr>
<tr><td>Offline-Speicher (Service Worker)</td><td>Programmdateien der App für den Offline-Start</td><td>Bis zum nächsten Update bzw. zur Löschung</td></tr>
</tbody></table></div>
<p>Diese Speicherung ist unbedingt erforderlich, damit die App die von Dir gewünschte Funktion erbringen kann (§ 25 Abs. 2 Nr. 2 TDDDG). Eine Einwilligung und ein Cookie-Banner sind dafür nicht nötig.</p>

<h2>5. Empfänger</h2>
<p><strong>Hosting:</strong> Hostinger International Ltd., 61 Lordou Vironos Street, 6023 Larnaka, Zypern. Die Server stehen in Frankfurt am Main, Deutschland. Wir haben einen Vertrag über Auftragsverarbeitung geschlossen.</p>
<p><strong>Spracherkennung:</strong> Die App nutzt die im Browser eingebaute Spracherkennung. Auf dem iPhone ist das die Spracherkennung von Apple (Apple Distribution International Ltd., Irland), in Chrome die von Google (Google Ireland Ltd., Irland). Je nach Gerät und Einstellung wird Deine Sprachaufnahme dafür an Server dieser Anbieter übertragen, auch außerhalb der EU. Dafür gelten die Datenschutzbestimmungen von <a href="https://www.apple.com/de/legal/privacy/" target="_blank" rel="noopener">Apple</a> bzw. <a href="https://policies.google.com/privacy?hl=de" target="_blank" rel="noopener">Google</a>. Wir erhalten nur den erkannten Text. Möchtest Du das nicht, nimm ohne Spracherkennung auf oder nutze die App nicht.</p>
<p><strong>Qalcurate-Plattform und Qalvy:</strong> Nur wenn Du eine Verbindung einrichtest, geben wir Deine Aufnahme an Deinen Qalvy-Agenten weiter. Welche KI-Modelle und Anbieter Qalvy dabei nutzt, steht im Datenschutzhinweis der Plattform.</p>
<p><strong>Übermittlung in Drittländer:</strong> Soweit Daten in die USA gelangen, erfolgt dies auf Grundlage des EU-US Data Privacy Framework (Angemessenheitsbeschluss der EU-Kommission vom 10.07.2023) bzw. der EU-Standardvertragsklauseln.</p>

<h2>6. Deine Rechte</h2>
<p>Du hast das Recht auf Auskunft (Art. 15 DSGVO), Berichtigung (Art. 16), Löschung (Art. 17), Einschränkung der Verarbeitung (Art. 18), Datenübertragbarkeit (Art. 20) und Widerspruch (Art. 21 DSGVO). Schreib uns dazu an <a href="mailto:${PROVIDER.email}">${PROVIDER.email}</a>.</p>
<p><strong>Widerspruchsrecht:</strong> Soweit wir Daten auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO verarbeiten, kannst Du aus Gründen, die sich aus Deiner besonderen Situation ergeben, jederzeit widersprechen.</p>
<p>Du kannst Dich außerdem bei einer Datenschutz-Aufsichtsbehörde beschweren, zum Beispiel bei der Landesbeauftragten für den Datenschutz Niedersachsen, Prinzenstraße 5, 30159 Hannover.</p>

<h2>7. Pflicht zur Bereitstellung</h2>
<p>Du bist nicht verpflichtet, uns Daten bereitzustellen. Ohne die technisch nötigen Daten (z. B. IP-Adresse) können wir die App aber nicht ausliefern.</p>

<h2>8. Änderungen</h2>
<p>Wir passen diesen Hinweis an, wenn sich die App oder die Rechtslage ändert. Es gilt die jeweils in der App angezeigte Fassung.</p>
${asOf('de')}`,
    },

    /* ----------------------------------------------------------------- TERMS */
    terms: {
      title: 'Nutzungsbedingungen',
      html: () => `
<h2>1. Anbieter und Geltung</h2>
<p>Qalcurate MOBILE wird von der ${PROVIDER.name}, ${PROVIDER.street}, ${PROVIDER.city} (${docLink('imprint', 'Impressum')}), angeboten. Diese Bedingungen gelten für die Nutzung der App unter qmob.qalcurate.com. Für die Qalcurate-Plattform und Qalvy gelten deren eigene Bedingungen.</p>

<h2>2. Leistung</h2>
<p>Die App ist kostenlos. Mit ihr kannst Du Gespräche aufnehmen, live transkribieren lassen und, wenn Du eine Verbindung einrichtest, an Deinen Qalvy-Agenten übergeben. Wir entwickeln die App weiter und können Funktionen ändern oder einstellen. Einen Anspruch auf ständige Verfügbarkeit gibt es nicht.</p>

<h2>3. Zustimmung aller Beteiligten</h2>
<p>Du darfst ein Gespräch nur aufnehmen, wenn <strong>alle Beteiligten vorher zugestimmt</strong> haben. Die App fragt das vor jeder Aufnahme ab. Für die Einholung der Zustimmung bist Du selbst verantwortlich. Heimliche Aufnahmen des nichtöffentlich gesprochenen Wortes sind nach § 201 StGB strafbar.</p>

<h2>4. Zulässige Nutzung</h2>
<p>Nutze die App nicht für rechtswidrige Zwecke, nicht zur Verletzung von Rechten Dritter und nicht so, dass der Betrieb gestört wird. Nimm keine Inhalte auf, zu deren Verarbeitung Du nicht berechtigt bist, zum Beispiel vertrauliche Informationen Dritter ohne deren Einverständnis.</p>

<h2>5. Transkripte und KI</h2>
<p>Transkripte entstehen automatisch durch die Spracherkennung Deines Geräts und können Fehler enthalten. Das gilt auch für Antworten der KI-Agenten in Qalvy. Prüfe die Ergebnisse, bevor Du sie verwendest.</p>

<h2>6. Deine Daten</h2>
<p>Aufnahmen liegen im Speicher Deines Browsers. Löschst Du die Browserdaten oder entfernst Du die App, sind sie weg. Für Sicherungskopien bist Du selbst verantwortlich. Wie wir Daten verarbeiten, steht im ${docLink('privacy', 'Datenschutzhinweis')}.</p>

<h2>7. Haftung</h2>
<p>Da wir die App unentgeltlich bereitstellen, haften wir nur für Vorsatz und grobe Fahrlässigkeit. Unberührt bleibt unsere Haftung für die Verletzung von Leben, Körper oder Gesundheit, nach dem Produkthaftungsgesetz und für arglistig verschwiegene Mängel.</p>

<h2>8. Änderungen und anwendbares Recht</h2>
<p>Wir können diese Bedingungen mit Wirkung für die Zukunft ändern; die aktuelle Fassung steht immer in der App. Es gilt deutsches Recht. Bist Du Verbraucher, bleiben zwingende Schutzvorschriften des Landes, in dem Du lebst, unberührt.</p>
${asOf('de')}`,
    },
  },

  en: {
    help: {
      title: 'Help',
      html: () => `
<p>Everything you need to set up and use Qalcurate MOBILE. Tap a topic to open it.</p>

<details class="doc-acc" open><summary>Set up on iPhone</summary>
<ol>
<li>Open <strong>qmob.qalcurate.com</strong> in <strong>Safari</strong>.</li>
<li>Tap the <strong>Share icon</strong> (square with an arrow pointing up).</li>
<li>Choose <strong>“Add to Home Screen”</strong> and tap <strong>“Add”</strong>.</li>
<li>From now on, always start the app from the icon on your Home Screen. Only then does the screen stay on while recording.</li>
<li>Allow access to the <strong>microphone</strong> on first start.</li>
</ol>
<p>Declined by mistake? Open the iPhone Settings, go to <strong>Apps › Safari › Microphone</strong> and choose “Ask” or “Allow”.</p>
</details>

<details class="doc-acc"><summary>Set up on Android</summary>
<ol>
<li>Open <strong>qmob.qalcurate.com</strong> in <strong>Chrome</strong>.</li>
<li>Tap the <strong>menu (⋮)</strong> at the top right.</li>
<li>Choose <strong>“Install app”</strong> or <strong>“Add to Home screen”</strong>.</li>
<li>Start the app from the new icon and allow access to the microphone.</li>
</ol>
</details>

<details class="doc-acc"><summary>Connect to Qalcurate</summary>
<p>Without a connection, all recordings stay on your device only. With a connection, each finished recording becomes its own chat with one of your Qalvy agents.</p>
<ol>
<li>Sign in to Qalcurate and open <strong>Settings › My account</strong> from your user menu.</li>
<li>Under <strong>Connections</strong>, tap <strong>“Set up”</strong> next to <strong>Qalcurate MOBILE</strong>, enter your Qalvy key and choose the agent.</li>
<li>Copy the <strong>webhook address</strong> shown.</li>
<li>Paste it here under <strong>Settings › Webhook URL</strong>, tap <strong>“Save”</strong>, then <strong>“Test connection”</strong>.</li>
</ol>
<p>The chat in Qalvy is then called, for example, <em>12.11.2026-14:34-Site visit Emden</em>. Without a title it says “Conversation”.</p>
</details>

<details class="doc-acc"><summary>Recording</summary>
<ol>
<li>Enter a <strong>title</strong> if you like and choose the <strong>language</strong> of the conversation.</li>
<li>Tap the <strong>microphone</strong>.</li>
<li>Confirm that <strong>everyone taking part has agreed</strong> to the recording. Without this, no recording starts.</li>
<li>You see the transcript live while recording.</li>
<li>Tap the microphone again to stop. After <strong>20 seconds of silence</strong> the recording stops automatically.</li>
</ol>
<p>Finished recordings are under <strong>History</strong>, where you also see whether they have been delivered.</p>
</details>

<details class="doc-acc"><summary>Screen lock and background</summary>
<ul>
<li>While recording, the screen stays on if you started the app from the Home Screen (iPhone with iOS 18.4 or later).</li>
<li>If the screen still goes dark, recording continues. A <strong>microphone icon</strong> appears in the status bar; tap it to return to the app after unlocking.</li>
<li>If you lock the iPhone with the <strong>side button</strong> or switch to another app, iOS stops the recording. Everything recorded up to then is saved.</li>
<li>A lock-screen indicator with a stop button is technically not possible for a web app.</li>
</ul>
</details>

<details class="doc-acc"><summary>Recording without internet</summary>
<p>Recording works without a network. The app stores recordings on your device and delivers them automatically once you are back online. <strong>Settings › Queue</strong> shows how many are still pending.</p>
<p>Live transcription usually needs an internet connection, because your device’s speech recognition uses Apple or Google servers.</p>
</details>

<details class="doc-acc"><summary>Updates</summary>
<p>The app updates itself. Close it and open it again to load the latest version. The version is shown under <strong>Settings › About Qalcurate MOBILE</strong>.</p>
</details>

<details class="doc-acc"><summary>Troubleshooting</summary>
<ul>
<li><strong>No transcript:</strong> In the iPhone Settings under <strong>General › Keyboard</strong>, check that <strong>Dictation</strong> is on, and check that you are online.</li>
<li><strong>“Test connection” fails:</strong> Check that the webhook address was pasted completely and that the connection in Qalcurate still exists.</li>
<li><strong>No microphone:</strong> Allow access as described under “Set up on iPhone”.</li>
<li>Still stuck? Write to us via ${docLink('contact', 'Contact and feedback')}.</li>
</ul>
</details>

<details class="doc-acc"><summary>Deleting data</summary>
<ul>
<li>Delete single recordings in <strong>History</strong>, or all at once with <strong>“Delete all”</strong>.</li>
<li><strong>Settings › Delete local data</strong> removes all recordings and settings from this device.</li>
<li>Removing the app from the Home Screen also makes iOS delete its data.</li>
<li>Chats already handed to Qalvy are deleted in Qalvy.</li>
</ul>
</details>`,
    },

    about: {
      title: 'About Qalcurate MOBILE',
      html: () => `
<h2>Qalcurate MOBILE</h2>
<p>Qalcurate MOBILE is the mobile app of Qalcurate. Record conversations, see the transcript live and, if you like, hand the recording straight to a Qalvy agent. Each recording becomes its own chat there that you can keep working with.</p>
<ul>
<li>Works offline; recordings are delivered automatically later.</li>
<li>No sign-in in the app, no cookies, no tracking.</li>
<li>Installs on iPhone and Android without an app store.</li>
</ul>

<h2>Qalcurate</h2>
<p>Qalcurate is the AI platform of Value4p GmbH for businesses. It combines specialist solutions, the <strong>Qalcurate Solutions</strong>, with <strong>Qalvy</strong>, the AI assistant with its own agents.</p>
<p>Qalcurate Solutions include, for example, climate risk assessment, predictive maintenance and an AI Management System. All solutions share one interface, one sign-in and one permission model. The platform is operated in Germany.</p>
<p>Learn more at <a href="https://qalcurate.com" target="_blank" rel="noopener">qalcurate.com</a>.</p>

<h2>Provider</h2>
${providerBlock('en')}
<p>${docLink('contact', 'Contact and feedback')} · ${docLink('imprint', 'Imprint')} · ${docLink('privacy', 'Privacy')} · ${docLink('terms', 'Terms of use')}</p>

<h2>Licences</h2>
<p>Typeface: Inter by Rasmus Andersson, SIL Open Font License 1.1.</p>
${asOf('en')}`,
    },

    contact: {
      title: 'Contact and feedback',
      html: () => `
<p>Got a question, found a bug or have an idea? We welcome every piece of feedback.</p>
<form class="doc-form" id="feedbackForm" novalidate>
  <div class="field-group">
    <label for="fbType">What is it about?</label>
    <select class="field-input" id="fbType" data-testid="select-feedback-type">
      <option value="Feedback">Feedback or idea</option>
      <option value="Bug">Report a bug</option>
      <option value="Question">Question</option>
    </select>
  </div>
  <div class="field-group">
    <label for="fbText">Your message</label>
    <textarea class="field-input" id="fbText" rows="5" maxlength="3000" placeholder="What did you notice?" data-testid="input-feedback-text"></textarea>
  </div>
  <label class="doc-check"><input type="checkbox" id="fbTech" checked data-testid="checkbox-feedback-tech"> Attach technical details (app version, device, browser, language). Recordings and the webhook address are not attached.</label>
  <button type="submit" class="btn btn-primary" data-testid="button-feedback-send">Prepare email</button>
  <p class="field-hint">Your email app opens with the prepared message. Nothing is sent until you tap “Send” there.</p>
</form>

<h2>Direct contact</h2>
${providerBlock('en')}
${contactBlock('en')}
<p>How we process your message is explained in the ${docLink('privacy', 'privacy notice')}.</p>`,
    },

    imprint: {
      title: 'Imprint',
      html: () => `
${enNote}
<h2>Information pursuant to § 5 DDG (German Digital Services Act)</h2>
${providerBlock('en')}
<p>Represented by the managing director: ${PROVIDER.rep}</p>

<h2>Contact</h2>
${contactBlock('en')}

<h2>Commercial register</h2>
<p>Register court: ${PROVIDER.court.en}<br>Register number: ${PROVIDER.register}</p>

<h2>VAT</h2>
<p>VAT identification number pursuant to § 27 a of the German VAT Act: ${PROVIDER.vat}</p>

<h2>Responsible for content</h2>
<p>${PROVIDER.rep}, ${PROVIDER.name}, ${PROVIDER.street}, ${PROVIDER.city}, ${PROVIDER.country.en}</p>

<h2>Consumer dispute resolution</h2>
<p>We are neither willing nor obliged to take part in dispute resolution proceedings before a consumer arbitration board.</p>
${asOf('en')}`,
    },

    privacy: {
      title: 'Privacy notice',
      html: () => `
${enNote}
<p>This notice explains which personal data are processed when you use Qalcurate MOBILE at qmob.qalcurate.com. For the Qalcurate platform and Qalvy, their own <a href="https://app.qalcurate.com/legal/privacy.html" target="_blank" rel="noopener">privacy notice</a> also applies.</p>

<h2>1. Controller</h2>
<p>${PROVIDER.name}, ${PROVIDER.street}, ${PROVIDER.city}, ${PROVIDER.country.en}, represented by ${PROVIDER.rep}<br>Email: <a href="mailto:${PROVIDER.email}">${PROVIDER.email}</a> · Phone: ${PROVIDER.phone}</p>

<h2>2. In short</h2>
<ul>
<li>The app needs no sign-in. We use <strong>no cookies</strong> and no analytics, tracking or advertising services.</li>
<li>Your recordings stay <strong>on your device</strong> unless you set up a connection to Qalcurate.</li>
<li>Live transcription is done by the speech recognition of your device or browser (Apple or Google).</li>
</ul>

<h2>3. Which data are processed</h2>
<div class="doc-table"><table>
<thead><tr><th>Activity</th><th>Data</th><th>Purpose and legal basis</th><th>Retention</th></tr></thead>
<tbody>
<tr><td>Opening the app</td><td>IP address, date and time, requested address, browser and operating system (server logs)</td><td>Delivery, stability and security; Art. 6(1)(f) GDPR</td><td>Deleted after 14 days at the latest, unless needed to investigate a security incident</td></tr>
<tr><td>Recordings on the device</td><td>Audio file, transcript, title, language, start, duration, delivery status</td><td>Recording and transcription for you; the data stay in your browser’s storage only, we do not receive them</td><td>Until you delete them</td></tr>
<tr><td>Speech recognition</td><td>Audio while recording</td><td>Live transcript via the speech recognition of your device or browser (see section 5)</td><td>According to Apple’s or Google’s terms</td></tr>
<tr><td>Delivery to Qalcurate (only with a connection set up)</td><td>Title, start, duration, transcript, recording ID; the audio file is sent along but discarded immediately and not stored</td><td>Handover to the Qalvy agent you chose, which creates a chat in your Qalvy account; Art. 6(1)(b) GDPR</td><td>Relay: IDs of the last 300 recordings (to prevent duplicates) and time, status and title of the last delivery, until you remove the connection. Chat in Qalvy: see the platform’s privacy notice</td></tr>
<tr><td>Settings</td><td>Webhook address, app and speech-recognition language</td><td>Display and function as you chose; stored locally on the device only</td><td>Until you delete them</td></tr>
<tr><td>Contact and feedback</td><td>Your email address, your message and, if you agree, technical details (app version, device, browser, language)</td><td>Handling your request; Art. 6(1)(f) GDPR, for questions about a contract Art. 6(1)(b) GDPR</td><td>Deleted once the request is settled, unless statutory retention obligations apply</td></tr>
</tbody></table></div>
<p>We make no automated decisions within the meaning of Art. 22 GDPR and create no usage profiles.</p>

<h2>4. Cookies and local storage</h2>
<p>Qalcurate MOBILE sets <strong>no cookies</strong>. So that the app works offline and keeps your recordings and settings, it stores data in your browser’s storage:</p>
<div class="doc-table"><table>
<thead><tr><th>Storage</th><th>Purpose</th><th>Duration</th></tr></thead>
<tbody>
<tr><td>IndexedDB “qalcurate-db”</td><td>Recordings, settings, queue</td><td>Until you delete it</td></tr>
<tr><td>Offline storage (service worker)</td><td>The app’s program files for offline start</td><td>Until the next update or deletion</td></tr>
</tbody></table></div>
<p>This storage is strictly necessary to provide the function you requested (§ 25(2) no. 2 TDDDG). No consent and no cookie banner are required.</p>

<h2>5. Recipients</h2>
<p><strong>Hosting:</strong> Hostinger International Ltd., 61 Lordou Vironos Street, 6023 Larnaca, Cyprus. The servers are located in Frankfurt am Main, Germany. We have concluded a data processing agreement.</p>
<p><strong>Speech recognition:</strong> The app uses the speech recognition built into your browser. On iPhone this is Apple’s speech recognition (Apple Distribution International Ltd., Ireland); in Chrome it is Google’s (Google Ireland Ltd., Ireland). Depending on device and settings, your audio is transmitted to these providers’ servers, including outside the EU. Their privacy policies apply: <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener">Apple</a>, <a href="https://policies.google.com/privacy?hl=en" target="_blank" rel="noopener">Google</a>. We only receive the recognised text. If you do not want this, do not use the app.</p>
<p><strong>Qalcurate platform and Qalvy:</strong> Only if you set up a connection do we pass your recording to your Qalvy agent. Which AI models and providers Qalvy uses is described in the platform’s privacy notice.</p>
<p><strong>Transfers to third countries:</strong> Where data reach the USA, this is based on the EU-US Data Privacy Framework (European Commission adequacy decision of 10 July 2023) or on the EU Standard Contractual Clauses.</p>

<h2>6. Your rights</h2>
<p>You have the right of access (Art. 15 GDPR), rectification (Art. 16), erasure (Art. 17), restriction of processing (Art. 18), data portability (Art. 20) and objection (Art. 21 GDPR). Write to <a href="mailto:${PROVIDER.email}">${PROVIDER.email}</a>.</p>
<p><strong>Right to object:</strong> Where we process data based on Art. 6(1)(f) GDPR, you can object at any time on grounds relating to your particular situation.</p>
<p>You may also lodge a complaint with a data protection supervisory authority, for example the State Commissioner for Data Protection of Lower Saxony, Prinzenstraße 5, 30159 Hannover, Germany.</p>

<h2>7. Obligation to provide data</h2>
<p>You are not obliged to provide data. Without the technically necessary data (e.g. IP address), however, we cannot deliver the app.</p>

<h2>8. Changes</h2>
<p>We update this notice when the app or the law changes. The version shown in the app applies.</p>
${asOf('en')}`,
    },

    terms: {
      title: 'Terms of use',
      html: () => `
${enNote}
<h2>1. Provider and scope</h2>
<p>Qalcurate MOBILE is provided by ${PROVIDER.name}, ${PROVIDER.street}, ${PROVIDER.city}, ${PROVIDER.country.en} (${docLink('imprint', 'Imprint')}). These terms apply to the use of the app at qmob.qalcurate.com. The Qalcurate platform and Qalvy have their own terms.</p>

<h2>2. Service</h2>
<p>The app is free of charge. You can record conversations, have them transcribed live and, if you set up a connection, hand them to your Qalvy agent. We keep developing the app and may change or discontinue features. There is no entitlement to constant availability.</p>

<h2>3. Consent of everyone taking part</h2>
<p>You may only record a conversation if <strong>everyone taking part has agreed beforehand</strong>. The app asks for this before every recording. Obtaining consent is your responsibility. Secretly recording words spoken in private is a criminal offence under § 201 of the German Criminal Code.</p>

<h2>4. Permitted use</h2>
<p>Do not use the app for unlawful purposes, to infringe the rights of others or in a way that disrupts its operation. Do not record content you are not entitled to process, such as confidential information of others without their consent.</p>

<h2>5. Transcripts and AI</h2>
<p>Transcripts are created automatically by your device’s speech recognition and may contain errors. The same applies to answers of AI agents in Qalvy. Check the results before you use them.</p>

<h2>6. Your data</h2>
<p>Recordings are kept in your browser’s storage. If you clear your browser data or remove the app, they are gone. You are responsible for backups. How we process data is described in the ${docLink('privacy', 'privacy notice')}.</p>

<h2>7. Liability</h2>
<p>As we provide the app free of charge, we are liable only for intent and gross negligence. This does not affect our liability for injury to life, body or health, under the German Product Liability Act or for fraudulently concealed defects.</p>

<h2>8. Changes and governing law</h2>
<p>We may change these terms with effect for the future; the current version is always available in the app. German law applies. If you are a consumer, mandatory protective provisions of your country of residence remain unaffected.</p>
${asOf('en')}`,
    },
  },
};
