
var app = new Vue({
  el: '#app',
  data: {
    works: [
        {title: 'Die Nachtwache', artist: 'Rembrandt van Rijn', created: '1642', text: 'Das Bild zeigt 34 Personen – davon 18 Schützen und 16 weitere Figuren. Im Vordergrund stehen der Hauptmann und sein Leutnant. Zwei hell erleuchtete Figuren in gelber Kleidung beherrschen den Bildaufbau: ein Mädchen im Mittelgrund und der Leutnant im Vordergrund.'},
        {title: 'Dienstmagd mit Milchkrug', artist: 'Jan Vermeer', created: '1658-1660', text: 'Im Zentrum des Bildes steht die Frau im Lichteinfall durch ein Fenster auf der linken Seite. Vor ihr befindet sich im linken Bildvordergrund, unter ebendiesem Fenster, ein Tisch, bedeckt mit einem Tuch und bestückt mit einem Brotkorb, einer Kanne und weiteren Speisen. Zudem steht auf dem Tisch eine Schale, in die die Magd Milch eingießt. Ihr Blick ist gesenkt, auf die Tätigkeit konzentriert. Ihre Kleidung wurde in leuchtenden, bunten Farben gemalt. Das gelbe Oberteil steht dabei im Kontrast zum Blau der Schürze, unter der ein langer roter Rock hervorschaut. Der Raum im Hintergrund ist spartanisch eingerichtet, die Rückwand leer und mit erkennbaren Löchern versehen, was ihr den Anschein einer Benutzung über lange Zeit verleiht.'},
        {title: 'Selbstbildnis mit grauem Filzhut', artist: 'Vincent van Gogh', created: '1887', text: 'Selbstbildnis Van Goghs mit hellem Filzhut, in braunem Überrock'}
    ],
    selectedWork: null,
    filtering: false,
    filterText: ''
  },
  computed: {
      filteredWorks: function () {
        if (this.filtering) {
            var self = this
            return self.works.filter(function (work) {
                return work.title.toLowerCase().indexOf(self.filterText.toLowerCase()) !== -1
            })
        }

        return this.works
      }
  },
  methods: {
      toggleFiltering: function () {
        this.filtering = !this.filtering;
      },
      selectWork: function (work) {
        this.selectedWork = work
      }
  }
})