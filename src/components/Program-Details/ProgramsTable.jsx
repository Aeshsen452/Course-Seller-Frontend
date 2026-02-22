import React from "react";

export const ProgramOne = ({ programdata }) => {
  return (
    <div className="flex justify-center items-center">
      <table className="border w-[80%] ">
        <thead>
          <tr className="border text-left ">
            <th className="border p-2 px-2">Dictation</th>
            <th className="border px-2">Answer Sheets</th>
            <th className="border px-2">Games</th>
          </tr>
        </thead>
        <tbody className="border">
          {programdata.map((item, groupIndex) =>
            item.Answersheet.map((ans, ansIndex) => (
              <tr key={`${groupIndex}-${ansIndex}`} className="border">
                {ansIndex === 0 && (
                  <td
                    rowSpan={item.Answersheet.length}
                    className="border px-2 text-blue-600 underline"
                  >
                    <a href={item.Dictation.dicLink} download>
                      {item.Dictation.dicName}
                    </a>
                  </td>
                )}

                <td className="border px-2 text-blue-600 underline">
                  <a href={ans.tdlink} download>
                    {ans.tdname}
                  </a>
                </td>
                <td className="border px-2 text-blue-600 underline">
                  <a href={ans.tdgameslink} download>
                    {ans.tdname}
                  </a>
                </td>
              </tr>
            )),
          )}
        </tbody>
      </table>
    </div>
  );
};

export const ProgramTwo = ({ programdata }) => {
  return (
    <div className="flex justify-center items-center">
      <table className="border w-[80%] ">
        <thead>
          <tr className="border text-left ">
            <th className="border p-2 px-2">Dictation</th>
            <th className="border px-2">Answer Sheets</th>
            <th className="border px-2">Spelling Reviews</th>
            <th className="border px-2">Games</th>
          </tr>
        </thead>
        <tbody className="border">
          <>
            {programdata.map((item, index) => {
              return (
                <React.Fragment key={index}>
                  {item.Answersheet.map((ans, ansindex) => (
                    <tr key={`ans-${index}-${ansindex}`} className="border ">
                      {ansindex === 0 && (
                        <td className=" px-2" rowSpan={item.Answersheet.length}>
                          <a
                            href={item.Dictation.dicLink}
                            download
                            className="text-blue-600 underline"
                          >
                            {item.Dictation.dicName}
                          </a>
                        </td>
                      )}
                      <td className="border  px-2">
                        <a
                          href={ans.tdlink}
                          className="text-blue-600 underline"
                          download
                        >
                          {ans.tdname}
                        </a>
                      </td>
                      {ansindex === 0 && (
                        <td className="" rowSpan={item.Answersheet.length}></td>
                      )}

                      <td className=" px-2">
                        <a
                          href={ans.tdgameslink}
                          className="text-blue-600 underline"
                          download
                        >
                          {ans.tdname}
                        </a>
                      </td>
                    </tr>
                  ))}

                  {/* Spelling Reviews Rows */}
                  {item.SpellingReviews?.map((spel, spelindex) => (
                    <tr key={`spel-${index}-${spelindex}`} className="border">
                      <td className="border  px-2"></td>
                      <td className="border  px-2"></td>
                      <td className="border  px-2">
                        {item.SpellingReviews.length > 1 ? (
                          <>
                            {spelindex === 0 ? (
                              <p>{spel?.linkname}</p>
                            ) : (
                              <a
                                href={spel?.link}
                                download
                                className="text-blue-600 underline"
                              >
                                {spel?.linkname}
                              </a>
                            )}
                          </>
                        ) : (
                          <a
                            href={spel?.link}
                            download
                            className="text-blue-600 underline"
                          >
                            {spel?.linkname}
                          </a>
                        )}
                      </td>
                      <td className="border  px-2 text-blue-600 underline">
                        {spel?.Games?.link && (
                          <a href={spel?.Games?.link}>
                            {spel?.Games?.linkname}
                          </a>
                        )}
                      </td>
                    </tr>
                  ))}
                </React.Fragment>
              );
            })}
          </>
        </tbody>
      </table>
    </div>
  );
};
