import React from 'react';

const Ipsum = () => {
  const paragraphs = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut ante nunc. Fusce quis est vel felis iaculis bibendum. Donec malesuada enim in leo consequat, ac elementum urna lacinia. Nulla facilisi. Donec bibendum, turpis sit amet interdum tempor, nulla nisl convallis enim, vitae sagittis quam nisi a tellus. In vel purus enim. Sed tristique blandit ligula, eget lobortis sapien lobortis vel. Nullam euismod orci sit amet convallis interdum. Praesent nec vestibulum nisi. ',
    'Suspendisse potenti. Vestibulum euismod justo ac sem facilisis, eu mollis arcu pretium. Vestibulum vel urna ac odio aliquam commodo. Donec lacinia commodo sapien, sed aliquam elit interdum nec. Nam auctor lectus in purus dignissim, sit amet fringilla nisl tincidunt. Integer non ipsum non mi bibendum malesuada in sed purus. Donec sit amet ipsum bibendum, cursus sapien id, dictum mauris. ',
    'Duis tristique odio libero, a lacinia enim faucibus vel. Sed sollicitudin elit at elit dignissim, vitae interdum massa tristique. Sed in vestibulum nisl. Donec dignissim augue vel nulla gravida, id feugiat est pretium. Nam fermentum massa quis justo bibendum eleifend. Aliquam vestibulum elementum ante, nec suscipit libero pretium quis. Pellentesque dictum, libero a laoreet aliquam, elit risus ultrices elit, id fermentum enim massa vel urna. ',
    'Aliquam dictum laoreet lacus, ac malesuada odio tempus eu. Proin eleifend ante et augue porttitor tincidunt. Etiam lacinia imperdiet augue, in interdum enim mollis ac. Sed sit amet ipsum arcu. Praesent sodales sem ut sapien aliquet dapibus. Praesent in ex vel elit congue tristique vitae id ante. Ut ut ullamcorper urna. ',
    'Sed ut metus pharetra, malesuada libero in, ultricies tortor. Maecenas eu nisi vel urna vestibulum imperdiet. Fusce sit amet tellus ut felis vehicula vulputate vel non ante. Ut non mi placerat, faucibus risus sit amet, pretium magna. Maecenas pretium velit nec sem bibendum, nec euismod augue gravida. Fusce interdum velit ac velit dignissim vehicula. Aliquam posuere, leo sed lacinia semper, arcu mauris elementum enim, vel malesuada tellus risus in lacus. '
  ];

  return (
    <div>
      {paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );
};

export default Ipsum;
